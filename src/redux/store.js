import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./reducers/gallerySlice";

const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});

export default store;
