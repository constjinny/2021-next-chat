import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import axios from "axios";
import getConfig from "next/config";

import { roomListReducer } from "../src/feature/RoomList";
import { roomReducer } from "../src/feature/room";

axios.defaults.baseURL = getConfig().publicRuntimeConfig.apiServerUrl;

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    roomListReducer,
    roomReducer,
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
    ],
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
