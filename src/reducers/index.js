import { combineReducers } from 'redux';

import weatherData from './weatherReducer';

// probably don't have to combine reducers since there is only 1
const rootReducer = combineReducers({ weatherData });

export default rootReducer;
