#2025.3.10
#project2 붓꽃 분류기 만들기
# 열심히 만들어 보겠다.
import joblib
import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier

iris_df = pd.read_csv('iris.csv')

y = iris_df['species']
X = iris_df.drop('species', axis=1)

kn = KNeighborsClassifier()
rfc = RandomForestClassifier()

model_kn = kn.fit(X, y)
model_rfc = rfc.fit(X, y)

joblib.dump(model_rfc, 'model_rfc.pkl')



X_new = np.array([[3,3,3,3]])
# ['versicolor']
# [[0.  0.4 0.6]]

# X_new = np.array([[5.0, 3.4, 3.5, 1.4]])
# kn ['setosa']
# # [[0.04 0.93 0.03]]

# X_new = np.array([[1, 4.2, 1.4, 7]])
# # kn ['versicolor']
# #[[0.54 0.24 0.22]]

model_rfc = joblib.load('model_rfc.pkl')

#prediction = model_kn.predict(X_new)
# prediction = model_kn.predict(X_new)
# print(prediction)
#probability = model_kn.predict_proba(X_new)
probability = model_rfc.predict_proba(X_new)
print(probability)


