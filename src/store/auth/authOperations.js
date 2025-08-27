import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, setAuthHeader } from "../../services/axiosHeader";
import { instance } from "../../services/axiosInstance";
import { handleAxiosError } from "../../utils/helpers/handler";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/signup", credentials);
      if (data.token) setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/signin", credentials);
      if (data.token) setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/signout");
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().auth?.token;

    if (persistedToken == null) {
      return rejectWithValue({ message: "Unable to fetch user" });
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
