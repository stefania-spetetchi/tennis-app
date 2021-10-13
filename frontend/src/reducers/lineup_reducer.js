import { GET_LINEUPS } from '../actions';

const defaultState = { lineups: [] };

const LineupReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_LINEUPS:
      return {
        lineups: action.payload,
      };
    default:
      return state;
  }
};

export default LineupReducer;
