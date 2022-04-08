import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const axiosService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosService.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("access"));
  if (token) {
    config.headers.Authorization = "Bearer " + token;
    // @ts-ignore
    console.debug(
      "[Request]",
      config.baseURL + config.url,
      JSON.stringify(token)
    );
  }
  return config;
});

axiosService.interceptors.response.use(
  (res) => {
    // @ts-ignore
    console.debug(
      "[Response]",
      res.config.baseURL + res.config.url,
      res.status,
      res.data
    );
    return Promise.resolve(res);
  },
  (err) => {
    console.debug(
      "[Response]",
      err.config.baseURL + err.config.url,
      err.response.status,
      err.response.data
    );
    return Promise.reject(err);
  }
);

const refreshAuthLogic = async (failedRequest) => {
  const refreshToken = JSON.parse(localStorage.getItem("refresh"));
  if (refreshToken !== null) {
    return axios
      .post(
        "/auth1/refresh/",
        {
          refresh: refreshToken,
        },
        {
          baseURL: process.env.REACT_APP_API_URL,
        }
      )
      .then((resp) => {
        const { access, refresh } = resp.data;
        failedRequest.response.config.headers.Authorization =
          "Bearer " + access;
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          console.log("eshy ");
        }
      });
  }
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export default axiosService;
