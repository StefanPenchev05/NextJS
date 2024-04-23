import { configureStore } from "@reduxjs/toolkit";
import { alertReducer } from "services/actions/alert";

export const makeStore = () => {
    return configureStore({
      reducer: {
        alert: alertReducer
      }
    })
  }

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']