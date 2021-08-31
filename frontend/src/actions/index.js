import axios from 'axios';

export const POST_MATCH = 'POST_MATCH';
export const GET_MATCHES = 'GET_MATCHES';
export const POST_LINEUP = 'POST_LINEUP';

export function getMatches() {
  return axios
    .get('http://localhost:8000/matches')
    .then((response) => ({
      type: GET_MATCHES,
      payload: response.data,
    }))
    .catch((error) => {
      alert('Error');
    });
}

export function saveMatch(match) {
  return axios
    .post('http://localhost:8000/matches', match)
    .then((response) => ({
      type: POST_MATCH,
      payload: response,
    }))
    .then(() => getMatches())
    .catch((error) => {
      alert('Error');
    });
}

export function saveLineup(lineup) {
  return axios
    .post('http://localhost:8000/lineups', lineup)
    .then((response) => ({
      type: POST_LINEUP,
      payload: response,
    }))
    .catch((error) => {
      alert('Error');
    });
}
