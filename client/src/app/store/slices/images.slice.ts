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

const remove = createAsyncThunk("images/remove", async (id: string) => {
  const { id: imageId } = await imagesService.remove(id);

  return imageId;
});

interface IImagesState {
  images: IImage[];
  selectedImage: IImage | null;
  isLoading: boolean;
}

const initialState: IImagesState = {
  images: [],
  selectedImage: null,
  isLoading: false,
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

    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAll.fulfilled, (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    });

    builder.addCase(remove.fulfilled, (state, action) => {
      state.images = state.images.filter(
        (image) => image.id !== action.payload,
      );
    });
  },
});

export const imagesActions = {
  create,
  getAll,
  remove,
  selectImage: imagesSlice.actions.selectImage,
};
export default imagesSlice.reducer;
