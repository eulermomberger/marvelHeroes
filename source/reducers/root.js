import { combineReducers } from 'redux';

import characters from './characters';

const reducers = combineReducers({
  characters
});

export default (state, action) => {
  return reducers(state, action);
}
