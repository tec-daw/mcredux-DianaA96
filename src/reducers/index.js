import { combineReducers } from "redux";

import counterReducer from './counter';
import lightReducer from './light';

const rootReducer = combineReducers({
    counter: counterReducer,
    light: lightReducer
});

export default rootReducer;