import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer} from "../Redux/ReducerProduct/reducer";
import {AuthReducer} from '../Redux/Login/reducer'
import thunk from "redux-thunk";
// import { cartreducer } from "../Redux/cartReducer/reducer";

const allReducer = combineReducers({
    productReducer,
    // cartreducer
    AuthReducer,
})

export const store = legacy_createStore(allReducer,applyMiddleware(thunk))