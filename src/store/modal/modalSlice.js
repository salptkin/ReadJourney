import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalName: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalName = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalName = null;
    },
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
      state.modalName = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal, toggleModal } = modalSlice.actions;
