import { combineReducers } from 'redux';
import AddScore from './add_score';

const rootReducer = combineReducers({
  scores: AddScore
});

export default rootReducer;