import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const storeObject = createStore(rootReducer,{
    result:0,
    leftvalue:'',
    operator:'',
    rightvalue:''
});