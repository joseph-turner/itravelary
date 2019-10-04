import { combineReducers } from 'redux';
import runtime from './runtime';
import trips from './trips';
import user from './user';

export default combineReducers({
  runtime,
  trips,
  user,
});
