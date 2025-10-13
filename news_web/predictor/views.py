import os
import joblib
import traceback
import warnings
from sklearn.exceptions import InconsistentVersionWarning
from django.conf import settings
from django.shortcuts import render
from django.http import JsonResponse

# Suppress sklearn version warnings
warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

MODEL_PATH = os.path.join(settings.BASE_DIR, 'bbc_tfidf_pipeline.pkl')
print("🔍 Checking model path:", MODEL_PATH)
print("🔍 Exists:", os.path.exists(MODEL_PATH))

try:
    model = joblib.load(MODEL_PATH)
    print("✅ Model loaded successfully")
    # Warm-up
    model.predict(["Warm-up test"])
except Exception as e:
    model = None
    print("❌ Model loading failed!")
    traceback.print_exc()

def home(request):
    return render(request, 'home.html')

def predict(request):
    if request.method == 'POST':
        text = request.POST.get('news_text', '').strip()
        if not text:
            return JsonResponse({'error': 'Please enter some news text!'})
        if len(text) > 5000:
            return JsonResponse({'error': 'Input too long!'})
        if model is None:
            return JsonResponse({'error': 'Model not loaded properly.'})
        try:
            prediction = model.predict([text])[0]
            # Only return prediction, no confidence
            return JsonResponse({'prediction': prediction})
        except Exception as e:
            traceback.print_exc()
            return JsonResponse({'error': f'Prediction error: {e}'})
    return JsonResponse({'error': 'Invalid request method'})
# Note: Confidence score is omitted due to model limitations