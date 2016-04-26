import { combineReducers } from 'redux';
import * as mapReducers from './map-reducers';

export const rootReducer = combineReducers({
  ...mapReducers,
});
