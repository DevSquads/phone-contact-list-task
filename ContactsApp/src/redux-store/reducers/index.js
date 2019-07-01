import { combineReducers } from 'redux';

import { app } from './app.reducer';
import { contacts } from './contacts.reducer';


const rootReducer = combineReducers ({
  app,
  contacts
});

export default rootReducer;