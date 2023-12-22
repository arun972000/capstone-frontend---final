import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Login";
import ThemeReducer from "./theme";


const storeToLocalStorage = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('redux_store', JSON.stringify(getState()));
    return result;
  }
}

const store = configureStore({
  reducer: {
    loginReducer,
    ThemeReducer
  },
  devTools: true,
  preloadedState: (function () {
    if (localStorage.getItem('redux_store') !== null) {
      return JSON.parse(localStorage.getItem('redux_store'));
    }
  })(),
  middleware: defaultMiddlewares => defaultMiddlewares().concat(storeToLocalStorage),
});



export default store;