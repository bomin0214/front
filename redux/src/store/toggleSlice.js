import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,

    reducers: {
        toggleModal: state => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleModal } = toggleSlice.actions;
export default toggleSlice.reducer;
