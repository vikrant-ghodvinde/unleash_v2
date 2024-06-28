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
import fontStyleReducer from "../reducers/fontStyleReducer";
import cardCornersReducer from "../reducers/cardCornersReducer";
import authReducer from "../reducers/authReducer";
import templateReducer from "../reducers/templateReducer";
import translationReducer from "../reducers/translationReducer";

const reducers = combineReducers({
  auth: authReducer,
  colors: colorsReducer,
  fontSize: fontSizeReducer,
  textAlignment: textAlignReducer,
  backgrounds: backgroundsReducer,
  fontStyle: fontStyleReducer,
  cardCorners: cardCornersReducer,
  template: templateReducer,
  translation: translationReducer,
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
