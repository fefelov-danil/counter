import {counterReducer} from "./reducers";
import {combineReducers, compose, legacy_createStore} from "redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    counterReducer: counterReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, composeEnhancers());

export type AppRootStateType  = ReturnType<typeof rootReducer>