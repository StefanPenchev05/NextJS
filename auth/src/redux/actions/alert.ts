import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";

interface IAlert {
  show: boolean;
  type: "error" | "warning" | "success" | undefined;
  verticalPosition: "bottom" | "top" | "center";
  horizontalPosition: "left" | "right" ;
  duration: number;
  message: string | undefined;
}

const initialState: IAlert = {
  show: false,
  message: undefined,
  type: undefined,
  verticalPosition: "bottom",
  horizontalPosition: "left",
  duration: 0,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    createAlert: (state, action: PayloadAction<IAlert>) => {
      return {...state, ...action.payload };
    },
    clearAlert: (state) => {
      return { ...initialState };
    },
  },
});

export const {createAlert, clearAlert} = alertSlice.actions;
export const alertReducer = alertSlice.reducer;

