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

The trained model provides correct predictions for new news articles.

Example predictions:

“India won the cricket world cup” → Sports

“Stock markets saw sharp increase” → Business

📌 Future Work

Improve accuracy with Deep Learning models (LSTM, CNN, RNN).

Explore Transformer models (BERT, RoBERTa, DistilBERT).

👨‍💻 Author

Developed by Manojit Dhara
