import { combineReducers } from "redux";
import appReducer from "./appReducer";
import demoReducer from "./demoReducer";

export const rootReducer = combineReducers({
    appReducer, demoReducer
})