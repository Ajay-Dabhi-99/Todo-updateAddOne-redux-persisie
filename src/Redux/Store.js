import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slice/TodoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const combineReducer = combineReducers({
  Todo: TodoSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Todo"],
};

const persistedReducer = persistReducer(persistConfig, combineReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export const persistor = persistStore(Store);
export default Store;
