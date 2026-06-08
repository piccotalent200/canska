import { baseUrl } from "@/utilities/url";
import Axios from "axios";

const globalAxiosInstance = Axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
    // "key": storeKey,
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
  },
});
globalAxiosInstance.interceptors.request.use(async (config) => {
  return config;
});

globalAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    switch (error?.response?.status) {
      case 400:
        handleBadRequest(error.response.data.message, error);
        break;

      case 401:
        handleUnauthorized(
          error?.response?.statusText
            ? error?.response?.statusText
            : error?.response?.data?.message,
        );
        break;

      case 403:
        handleForbidden(error?.response?.statusText);
        break;

      case 404:
        handleNotFound(error?.response?.statusText);
        break;

      case 422:
        handleUnProcessableEntry(error?.response?.statusText);
        break;

      case 502:
        handleBadGatway(error?.response?.statusText);
        break;

      case 500:
        handleServerError(error?.response?.statusText);
        break;

      default:
        break;
    }

    return error.response;
  },
);

async function handleBadRequest(error) {}

async function handleUnauthorized(error) {}

async function handleForbidden() {}
async function handleBadGatway(error) {}

async function handleNotFound(error) {}

async function handleUnProcessableEntry(error) {}

function handleServerError(error) {}

export default globalAxiosInstance;
