import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { DataReducer } from "./reducers/dataReducer";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["data","post"],
};
const reducers = combineReducers({
  data: DataReducer,
//   post: 
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistedStore = persistStore(store);
export { store, persistedStore };
