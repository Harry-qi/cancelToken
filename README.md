# 学习axios取消请求：
下面是get和post两种示例
```javascript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
  console.log('Request canceled', thrown.message);
  } else {
  // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```
