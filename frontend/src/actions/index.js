import axios from 'axios';

export const POST_MATCH = 'POST_MATCH';
export const GET_MATCHES = 'GET_MATCHES';
export const POST_LINEUP = 'POST_LINEUP';
export const GET_LINEUPS = 'GET_LINEUPS';
export const DELETE_MATCH = 'DELETE_MATCH';
// export const STORE_DELETED_MATCHES = 'STORE_DELETED_MATCHES';

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

export function deleteMatch(id) {
  return axios
    .delete('http://localhost:8000/matches', { params: id })
    .then(() => getMatches())
    .catch((error) => {
      alert('errrrrror');
    });
}

// export function storeDeletedMatches(id) {
//   return axios
//     .post('http://localhost:8000/deleted', { params: id })
//     .then((response) => ({ type: STORE_DELETED_MATCHES, payload: response }))
//     .catch((error) => {
//       alert(error);
//     });
// }

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

export function getLineups() {
  return axios
    .get('http://localhost:8000/lineups')
    .then((response) => ({
      type: GET_LINEUPS,
      payload: response.data,
    }))
    .catch((error) => {
      alert('Error');
    });
}
