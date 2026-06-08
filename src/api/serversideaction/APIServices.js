import globalAxiosInstance from "../interceptor";

class APIServices {
  getAll(url) {
    return globalAxiosInstance.get(`/${url}`);
  }

  create(url, data) {
    return globalAxiosInstance.post(`/${url}`, data);
  }

  update(url, data) {
    return globalAxiosInstance.put(`/${url}`, data);
  }

  delete(url) {
    return globalAxiosInstance.delete(`/${url}`);
  }

  updateUrl(url) {
    return globalAxiosInstance.put(`/${url}`);
  }
}

// Assign the instance to a variable before exporting
const apiServices = new APIServices();
export default apiServices;
