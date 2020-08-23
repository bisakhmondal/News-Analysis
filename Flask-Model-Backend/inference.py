import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer, tokenizer_from_json
from tensorflow.keras.preprocessing.sequence import pad_sequences
import re
import json
from functools import partial

__all__ = ['Model']
embedding_dim = 200
max_length = 60
trunc_type = 'post'
padding_type = 'post'
oov_tok = "<OOV>"

weights = 'model_weights/model.h5'
tokens = 'model_weights/tokenizer.json'

class Model:
    def __init__(self):
        self.filter = partial(re.sub,'[^ A-Za-z0-9]+',' ')
        self.padder = partial(pad_sequences, maxlen=max_length,padding=padding_type, truncating=trunc_type)
        with open(tokens,'r') as f:
            data = json.load(f)
            self.tokenizer = tokenizer_from_json(data)
        self.vocab_size = len(self.tokenizer.word_index)

        self.model = self._getModel()
    def _getModel(self):
        model = tf.keras.Sequential([
            tf.keras.layers.Embedding(self.vocab_size + 1, embedding_dim, input_length=max_length, trainable=False),
            tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(64, return_sequences=True)),
            tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(64)),
            tf.keras.layers.Dense(128, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.001)),
            tf.keras.layers.Dropout(0.4),
            tf.keras.layers.Dense(16, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.001)),
            tf.keras.layers.Dense(1, activation='sigmoid')

        ])
        model.compile('adam', 'binary_crossentropy', ['accuracy'])
        model.load_weights(weights)
        return model
    def predict(self, sentences : list) -> list :
        formatted = [self.filter(x) for x in sentences]
        sequences = self.tokenizer.texts_to_sequences(formatted)
        pads = self.padder(sequences=sequences)

        probs = self.model.predict(pads)

        return probs


