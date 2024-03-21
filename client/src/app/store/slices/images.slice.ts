import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import IImage from "@shared/types/image/image.interface";
import imagesService from "src/app/api/services/images.service";

const create = createAsyncThunk("images/create", async (file: File) => {
  const createdImage = await imagesService.create(file);

  return createdImage;
});

const getAll = createAsyncThunk("images/getAll", async () => {
  const images = await imagesService.getAll();

  return images;
});

interface IImagesState {
  images: IImage[];
}

const initialState: IImagesState = {
  images: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(create.fulfilled, (state, action) => {
      state.images = [...state.images, action.payload];
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.images = action.payload;
    });
  },
});

export const imagesActions = {
  create,
  getAll,
};
export default imagesSlice.reducer;
