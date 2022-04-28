import { combineReducers } from "redux";

import counterReducer from './counter';
import lightReducer from './light';

import faqReducer from './faq';

const rootReducer = combineReducers({
    counter: counterReducer,
    light: lightReducer,
    faqs: faqReducer,
});

export default rootReducer;