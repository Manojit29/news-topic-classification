📰 News Topic Classification 

This project builds a news topic classifier using the BBC News Dataset.
The model predicts the category of a news article based on its text content using TF-IDF + Logistic Regression.
It is already deployed as a web application using Django/Flask with HTML, CSS, and JavaScript.

📌 Features

Preprocesses news text (cleaning, stopword removal, lemmatization).

Converts text into TF-IDF features.

Trains a Logistic Regression classifier.

Saves the trained pipeline for reuse (bbc_tfidf_pipeline.pkl).

Provides a simple web interface for predictions.

🛠️ Technologies Used

Python

Pandas – Data handling

Scikit-learn – Pipeline, TF-IDF, Logistic Regression

NLTK – Text preprocessing (stopwords, lemmatizer)

Joblib – Saving/loading model

Django / Flask – Web application backend

HTML, CSS, JavaScript – Frontend for user input/output

📂 Dataset

BBC Text Dataset (bbc-text.csv)

Contains thousands of BBC news articles in 5 categories:

1)Business

2)Politics

3)Sports

4)Tech

5)Entertainment

🔑 Workflow

Import libraries (Pandas, NLTK, Scikit-learn).

Load the dataset (bbc-text.csv).

Preprocess text (lowercasing, cleaning, lemmatization, stopword removal).

Split data into train (70%) and test (30%).

Create a Pipeline (TF-IDF + Logistic Regression).

Train the model on the training data.

Save trained pipeline to bbc_tfidf_pipeline.pkl.

Serve predictions through a Django/Flask web app.



📊 Results

The trained machine learning pipeline demonstrates strong performance on real-world news text.

Model: TF-IDF + Logistic Regression

Accuracy: ~97% on BBC News dataset

Example Predictions

“India won the cricket world cup” → Sports

“Stock markets saw a sharp increase today” → Business

“The government passed a new law related to tax reforms” → Politics

The deployed Django application provides consistent and reliable predictions for unseen news articles.

📌 Model Selection Insight

During development, multiple modeling strategies were evaluated.
The classical machine learning approach was selected for deployment due to:

High accuracy on this dataset

Faster inference time

Lower complexity and easier deployment

This highlights the importance of choosing models based on data characteristics rather than complexity alone.

📌 Future Improvements

Evaluate neural network–based text classifiers on larger datasets

Explore pretrained language models (e.g., Transformer-based architectures) for improved semantic understanding

Extend the application with API-based inference and cloud deployment


👨‍💻 Author

Developed by Manojit Dhara
