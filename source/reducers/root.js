import { combineReducers } from 'redux';

import characters from './characters';
import ui from './ui';

const reducers = combineReducers({
  characters,
  ui
});

export default (state, action) => {
  return reducers(state, action);
}
