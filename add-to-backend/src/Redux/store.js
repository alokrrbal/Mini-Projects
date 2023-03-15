

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";

const rootStore = combineReducers({
    authReducer
})

export const store = legacy_createStore(rootStore , applyMiddleware(thunk))