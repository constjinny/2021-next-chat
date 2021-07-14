import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import axios from "axios";
import getConfig from "next/config";

import { roomReducer } from "@features/RoomList";

axios.defaults.baseURL = getConfig().publicRuntimeConfig.apiServerUrl;

const rootReducer = combineReducers({
  roomReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return rootReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
    ],
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
