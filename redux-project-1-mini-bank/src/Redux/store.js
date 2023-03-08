import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
    amount:0
}

export const store = legacy_createStore( reducer , initialState )