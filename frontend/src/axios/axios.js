import axios from 'axios';

const axiosInstance = axios.create({
});

axiosInstance.interceptors.response.use(
  (response) => {
  
    return { data: response.data, error: null };
  },
  (error) => {
    let formattedError = error;

    if (error.response) {
      formattedError = {
        status: error.response.status,
        message: error.response.data.message || error.message,
        data: error.response.data,
      };
    } else if (error.request) {
      formattedError = {
        message: 'No response received from server',
        request: error.request,
      };
    } else {
      formattedError = {
        message: error.message,
      };
    }

    return { data: null, error: formattedError };
  }
);

export default axiosInstance;
