import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store.slice";
import rootSaga from "./store.saga";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { AppDispatch, AppStore } from "./store.types";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
export const useAppStore = () => useStore<AppStore>();

export default store;
