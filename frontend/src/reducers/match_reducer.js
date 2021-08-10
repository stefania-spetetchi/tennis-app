import { GET_MATCHES } from '../actions';

const defaultState = { matches: []};

const MatchesReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_MATCHES:
      return {
        matches: action.payload,
      }
    default: return state;
  };
  
};

export default MatchesReducer;