import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import ICreateImage from "@shared/types/image/create-image.interface";
import IImage from "@shared/types/image/image.interface";
import imagesService from "src/app/api/services/images.service";

const create = createAsyncThunk("images/create", async (createImageData: ICreateImage) => {
  const createdImage = await imagesService.create(createImageData);

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
  isUploading: boolean;
}

const initialState: IImagesState = {
  images: [],
  selectedImage: null,
  isLoading: false,
  isUploading: false,
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
    builder.addCase(create.pending, (state) => {
      state.isUploading = true;
    });

    builder.addCase(create.fulfilled, (state, action) => {
      state.images = [...state.images, action.payload];
      state.isUploading = false;
    });

    builder.addCase(create.rejected, (state) => {
      state.isUploading = false;
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
