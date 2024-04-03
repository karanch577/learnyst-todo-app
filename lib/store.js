import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import todosSlice from "./features/todos/todosSlice";
import { persistStore } from "redux-persist";


// create a dummy storage for server-side - cannot use localStorage on the server
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["todos"]
}

const rootReducer = combineReducers({
    todos:persistReducer(persistConfig, todosSlice),
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);
