import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalName: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
      state.modalName = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleModal } = modalSlice.actions;
