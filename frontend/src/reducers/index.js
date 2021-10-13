import { combineReducers } from 'redux';
import LineupReducer from './lineup_reducer';
import MatchesReducer from './match_reducer';

const rootReducer = combineReducers({
  matches: MatchesReducer,
  lineups: LineupReducer,
});

export default rootReducer;
