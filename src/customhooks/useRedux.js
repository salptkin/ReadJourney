import { useDispatch, useSelector } from "react-redux";

/** @returns {import("../store/store").AppDispatch} */
export const useAppDispatch = () => useDispatch();

/** @type {import("react-redux").TypedUseSelectorHook<import("../store/store").RootState>} */
export const useAppSelector = useSelector;
