import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getMatches, deleteMatch } from '../actions';

const MatchView = () => {
  const { matches } = useSelector((state) => state.matches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMatches());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMatches]);

  function handleDelete(id) {
    dispatch(deleteMatch(id));
  }

  function renderMatchesDisplay() {
    if (!_.isEmpty(matches)) {
      const matchesTableRows = matches.map((match) => {
        const scoresList = match.scores;
        // eslint-disable-next-line prefer-destructuring
        const opponent = match.opponent;

        return (
          <tr key={match._id}>
            <td>{match.type}</td>
            <td>{match.level}</td>
            <td>{match.winner}</td>
            <td>
              {opponent.map((opponentName) => (
                <p>{opponentName}</p>
              ))}
            </td>
            <td>{match.date}</td>
            <td>{match.location}</td>
            <td>{match.notes}</td>
            <td>
              {scoresList.map((scorePair) => {
                let result = '';
                if (scorePair[0] !== null && scorePair[1] !== null) {
                  if (scorePair[0] > scorePair[1]) {
                    result = 'W';
                  } else result = 'L';
                } else if (scorePair[0] == null && scorePair[1] == null) {
                  return <div />;
                }

                return (
                  <p>
                    {scorePair[0]}-{scorePair[1]} {result}
                  </p>
                );
              })}
            </td>
            <td>
              <button
                type="button"
                className="fail button"
                onClick={() => {
                  const id = match._id;
                  const confirm = window.confirm(
                    'Do you really want to delete this match?'
                  );
                  if (confirm === true) {
                    handleDelete(id);
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });

      return (
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="medium-12 cell">
              <table>
                <thead>
                  <tr>
                    <th width="150">Type</th>
                    <th width="150">Level</th>
                    <th width="150">Winner</th>
                    <th width="150">Opponent</th>
                    <th width="150">Date</th>
                    <th width="150">Location</th>
                    <th width="150">Notes</th>
                    <th width="150">Scores</th>
                    <th width="100">Delete</th>
                  </tr>
                </thead>
                <tbody>{matchesTableRows}</tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }

  return <div>{renderMatchesDisplay()}</div>;
};

export default MatchView;
