import { createSlice } from "@reduxjs/toolkit";
import { EModalName } from "@shared/types/modal/modal-name.enum";

interface IModalsState {
  activeModalName: EModalName | "";
}

const initialState: IModalsState = {
  activeModalName: "",
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.activeModalName = action.payload as EModalName;
    },
    closeModal: (state) => {
      state.activeModalName = "";
    },
  },
});

export const modalsActions = {
  openModal: modalsSlice.actions.openModal,
  closeModal: modalsSlice.actions.closeModal,
};
export default modalsSlice.reducer;
