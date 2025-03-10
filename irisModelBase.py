#2025.3.10
#project2 붓꽃 분류기 만들기
# 열심히 만들어 보겠다.

import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

iris_df = pd.read_csv('iris.csv')

y = iris_df['species']
X = iris_df.drop('species', axis=1)

kn = KNeighborsClassifier()
model_kn = kn.fit(X, y)

# X_new = np.array([[3,3,3,3]])
# kn ['versicolor']
# X_new = np.array([[5.0, 3.4, 3.5, 1.4]])
# kn ['setosa']
X_new = np.array([[1, 4.2, 1.4, 7]])
# kn ['versicolor']
prediction = model_kn.predict(X_new)
print(prediction)
probability = model_kn.predict_proba(X_new)
print(probability)


