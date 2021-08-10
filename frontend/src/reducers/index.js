import { combineReducers } from 'redux';
import MatchesReducer from './match_reducer';

const rootReducer = combineReducers({
  matches: MatchesReducer
});

export default rootReducer;