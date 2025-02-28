---
title: db1的机器学习笔记
createTime: 2025/02/24 03:13:20
permalink: /learning-notes/ml/personal/db1/
icon: /avatar/db1.jpg
---

编写者: [@db1](/friends/persons/)
## 代码示例

**监督机器学习的代码示例及步骤(以scikit-learn框架为例)：**

### 1. 数据预处理

**数据集导入**

```python
df = pd.read_excel('NHANES.xlsx')
```

**数据集的划分** 以常见的8：2划分数据集为训练集和测试集

```python
y=df['GDM']#分类变量
X=df[['Age.Class', 'BMI.Class', 'Pregnancy.times','Parturition.times','UA','ALT','AST','GGT','PLT','Ca','NPAR']]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

**是否需要 缺失值的插补**

**是否需要 平衡类别**

在这一步考虑训练集的类别是否平衡，是否需要进行平衡类别。例如对不平衡的数据集进行SMOTE过采样。

```python
smote = SMOTE(random_state=42)

X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

print("平衡后数据集类别分布:", Counter(y_resampled))

X_train=X_resampled
y_train=y_resampled
```

**数据的归一化**

### 2. 模型选择

这里以常见的几种模型为例，并以分类问题为例，尝试得到其训练集和测试集的accuracy，AUC，并以一个表格的形式展现出来。

```python
# Model creation
List_of_models = [LogisticRegression(random_state=42), 
                  KNeighborsClassifier(), 
                  GaussianNB(), 
                  DecisionTreeClassifier(random_state=42),
                  SVC(probability=True), 
                  RandomForestClassifier(random_state=42)]
List_of_models_for_graph = ["LogisticRegression", "KNeighborsClassifier", "GaussianNB", "DecisionTreeClassifier","SVM", "RandomForestClassifier"]
df_results = pd.DataFrame(index = ["train accuracy", "test accuracy","train auc","test auc"])

for i in range(len(List_of_models)):
    model_class = List_of_models[i] 
    model_class.fit(X_train, y_train)
    y_scores = model_class.predict_proba(X_train)[:, 1]  # 获取正类的预测概率
    auc1 = roc_auc_score(y_train, y_scores)
    y_scores = model_class.predict_proba(X_test)[:, 1]  # 获取正类的预测概率
    auc2 = roc_auc_score(y_test, y_scores)
    results_classification = np.array([model_class.score(X_train,y_train), model_class.score(X_test,y_test),auc1,auc2])
    df_results[List_of_models_for_graph[i]] = results_classification
df_graph = df_results.transpose()#行列交换，转置
```



### 3. 调参

常用的调参方式为网格搜索，optuna。以下为对随机森林进行网格搜索调参的代码：

```python
RandomForestClassifier_parameters = {'criterion' : ['gini', 'entropy'],
                                     'n_estimators' : [1,10,20,30, 100, 200, 400], 
                                     'min_samples_split' : [7,9,10,20,30], 
                                     'min_samples_leaf' : [1,2,5,7,9,10], 
                                     'max_features' : ['sqrt', 'log2'],
                                     }


RandomForestClassifier_GridSearchCV = GridSearchCV(estimator = RandomForestClassifier(random_state=42), param_grid = RandomForestClassifier_parameters, cv=5, n_jobs=-1, verbose=0
        )
RandomForestClassifier_GridSearchCV.fit(X_train, y_train)
List_of_models[5]=RandomForestClassifier_GridSearchCV.best_estimator_#更新Model列表
print(RandomForestClassifier_GridSearchCV.best_params_)
```



### 4. 结果显示

例如：以ROC作图的形式输出结果

```python
models = {
    "KNeighbors Classifier": List_of_models[1],
    "GaussianNB": List_of_models[2],
    "DecisionTree Classifier": List_of_models[3],
    "SVM": List_of_models[4],
    "RF": List_of_models[5],
}

# 绘制ROC曲线
plt.figure(figsize=(10, 10))

for name, model in models.items():
    y_scores = model.predict_proba(X_test)[:, 1]  # 获取正类的概率
    fpr, tpr, _ = roc_curve(y_test, y_scores)
    roc_auc = auc(fpr, tpr)
    plt.plot(fpr, tpr, label=f'{name} (AUC = {roc_auc:.3f})')

plt.plot([0, 1], [0, 1], 'k--', label='Random Guess')

plt.title('ROC Curve for Testing Set')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.legend(loc='lower right')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.0])
plt.grid()

plt.show()
```

------

### 5. 完整代码下载

链接: [https://github.com/db1-bot/mL-learning-notes](https://github.com/db1-bot/mL-learning-notes)