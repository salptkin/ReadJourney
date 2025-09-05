import { instance } from "./axiosInstance";
import { setAuthHeader } from "./axiosHeader";

export const axiosBaseQuery = async ({ url, method, data, params }, { getState }) => {
  const token = getState().auth?.token;

  if (token) {
    setAuthHeader(token);
  }

  try {
    const result = await instance({
      url,
      method,
      data,
      params,
    });
    return { data: result.data };
  } catch (err) {
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};
