import { combineReducers } from 'redux';
import * as titleReducers from './title-reducers';

export const rootReducer = combineReducers({
  ...titleReducers,
});
