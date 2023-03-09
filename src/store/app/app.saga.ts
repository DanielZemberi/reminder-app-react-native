import { appActions } from "./app.slice";
import { put } from "typed-redux-saga";
import { takeLatest } from "redux-saga/effects";

function* setHasTokens(action: ReturnType<typeof appActions.setHasTokens>) {
  if (!action.payload) return;
}

export default function* appSaga() {
  yield takeLatest(appActions.setHasTokens, setHasTokens);
}
