import axios from 'axios'

/**
 * Axios response interceptor.
 * Handles expected and unexpected errors globally.
 */
axios.interceptors.response.use(
  response => response,
  error => {
    const isExpectedError = error.response && error.response.status >= 400 && error.response.status < 500

    if (!isExpectedError) {
      // Log unexpected errors. Replace with a logging service (e.g., Sentry) for production use.
      console.error('An unexpected error occurred:', error.response?.data?.message)
    }

    return Promise.reject(error)
  }
)

/**
 * Axios request interceptor.
 * Configures common headers for all outgoing requests.
 */
axios.interceptors.request.use(config => {
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH'
  config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'

  return config
})

/**
 * Axios instance export.
 * Provides simplified access to HTTP methods.
 */
export const axiosInstance = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
}

export default axiosInstance
