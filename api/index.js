const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

function getTodos(){
  return service.get('/todos', {
    cancelToken: source.token
  }).catch(err => {
    // 这里主要是判断这个错误是取消请求导致的还是其他原因导致的
    if (service.isCancel()) {
      console.log(err.message);
    }
  });
}
function getUsers(){
  return service.get('/users', {
    cancelToken: source.token
  }).catch(err => {
    // 这里主要是判断这个错误是取消请求导致的还是其他原因导致的
    if (service.isCancel()) {
      console.log(err.message);
    }
  });
}
function getComments(){
  return service.get('/comments', {
    cancelToken: source.token
  }).catch(err => {
    // 这里主要是判断这个错误是取消请求导致的还是其他原因导致的
    if (service.isCancel()) {
      console.log(err.message);
    }
  });
}
