"use client";
import { Provider } from "react-redux";
import { store } from "./store";

interface StoreProvider {
  children: React.ReactNode;
}

export const ReduxProvider: React.FC<StoreProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
