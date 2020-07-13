

import thunk from "redux-thunk"

import { createStore, combineReducers, applyMiddleware } from "redux" 
import {dataReducer } from "./reducers/dataReducer"


const rootReducer = combineReducers({
    getData: dataReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))