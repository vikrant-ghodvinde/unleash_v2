import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import colorsReducer from "../reducers/colorsReducer";
import fontSizeReducer from "../reducers/fontSizeReducer";
import textAlignReducer from "../reducers/textAlignReducer";
import backgroundsReducer from "../reducers/backgroundsReducer";

const reducers = combineReducers({
  colors: colorsReducer,
  fontSize: fontSizeReducer,
  textAlignment: textAlignReducer,
  backgrounds: backgroundsReducer,
});

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
