import axios from 'axios'
var instance = axios.create({
  baseURL:"/evcard-mmp/api",
  timeout:5000,
 
});
export default function (options) {

  try {
    return instance(options).then((response) => {
      let {headers, data} = response
      let contentType = headers['content-type']
      if (contentType && contentType.indexOf('application/json') !== -1) {
        let {status, message} = data
        if (status !== 0) {
          return Promise.reject(new Error(message))
        }
        return Promise.resolve(data)
      } else {
        return Promise.reject(new Error('the response is not JSON'))
      }
    })
  } catch (e) {
    console.error('axios error: ', e)
  }
}
