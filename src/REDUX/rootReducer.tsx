import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './reducer_app';
import userReducer from './reducer_user';
const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export default rootReducer;