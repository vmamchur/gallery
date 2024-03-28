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
  selectedImage: IImage | null;
}

const initialState: IImagesState = {
  images: [],
  selectedImage: null,
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    selectImage: (state, action) => {
      state.selectedImage = action.payload as IImage;
    },
  },
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
  selectImage: imagesSlice.actions.selectImage,
};
export default imagesSlice.reducer;
