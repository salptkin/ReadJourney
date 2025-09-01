// helpers/handlers.js
import axios from "axios";

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleAxiosError = (error) => {
  if (axios.isAxiosError && axios.isAxiosError(error)) {
    return (
      error.response?.data?.message || 
      "Something went wrong, please try again!"
    );
  }
  return "An error occurred";
};

export const handleUserData = (state, action) => {
  const payload = action.payload;
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.token = payload.token;
  state.isLoggedIn = true;
};
