import store from "./index";
import rootReducer from "./store.slice";

export type AppStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type TOperationStatus = "success" | "pending" | "error";
export type TFetchingStatus = TOperationStatus | "refetching";
