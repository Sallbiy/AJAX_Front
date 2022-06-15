import axios from "axios";

const configuration = {
  baseURL: process.env.VUE_APP_API_URL,
};

export const createAxiosInstance = (params = {}) => {
  const override = Object.assign({}, configuration, params);

  const instance = axios.create(override);
  return instance;
};

export default {
  createAxiosInstance,
};
