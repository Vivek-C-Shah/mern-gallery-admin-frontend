import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialValues = {
  images: [],
  categories: [],
};

const API_URL = "https://mern-gallery-backend.vercel.app";

export const getAllImages = createAsyncThunk(
  "images/fetchallimages",
  async () => {
    const res = await axios.get(`${API_URL}/api/v1/get/images`);
    return res.data;
  }
);

export const getAllCategories = createAsyncThunk(
  "images/fetchallcategories",
  async () => {
    const res = await axios.get(`${API_URL}/api/v1/get/categories`);
    return res.data;
  }
);

export const postNewCategory = createAsyncThunk(
  "images/postnewcategory",
  async (payload) => {
    const res = await axios.post(`${API_URL}/api/v1/add/category`, payload);
    return res.data;
  }
);

export const postNewImage = createAsyncThunk(
  "images/postnewimage",
  async (payload) => {
    const res = await axios.post(`${API_URL}/api/v1/upload/image`, payload);
    return res.data;
  }
);

export const getSingleImage = createAsyncThunk(
  "images/getsingleImageData",
  async (payload) => {
    const res = await axios.get(
      `${API_URL}/api/v1/get/singleimage?category=${payload}`
    );
    return res.data;
  }
);

const gallerySlice = createSlice({
  name: "galleryslice",
  initialState: initialValues,
  reducers: {},
  extraReducers: {
    [getAllImages.fulfilled]: (state, action) => {
      state.images = action.payload;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getSingleImage.fulfilled]: (state, action) => {
      state.images = action.payload;
    },
  },
});

export default gallerySlice.reducer;
