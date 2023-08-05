import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux';
// import { formDatailsReducer } from "redux/contactSlice";
// import { formFilterReduser } from "redux/filterSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { todosSliceReducer } from "./todoSlice";
  
  const contactsPersistConfig = {
    key: 'todos',
    storage,
    whitelist: ['todos'],
  };
  
  export const store = configureStore({
    reducer: {
      todos: persistReducer(contactsPersistConfig, todosSliceReducer),
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);