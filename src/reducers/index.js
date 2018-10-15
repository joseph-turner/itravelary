// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import tripSettings from './tripSettingsReducer';

 const rootReducer = combineReducers({
   tripSettings,
 });

 export default rootReducer;
