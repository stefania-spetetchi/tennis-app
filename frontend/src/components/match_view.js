import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getMatches } from '../actions';

const MatchView = () => {
  const { matches } = useSelector((state) => state.matches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMatches());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMatches]);

  function renderMatchesDisplay() {
    if (!_.isEmpty(matches)) {
      const matchesTableRows = matches.map((match) => {
        const scoresList = match.scores;
        const { opponent } = match;

        return (
          <tr key={match._id}>
            <td>{match.type}</td>
            <td>{match.level}</td>
            <td>{match.winner}</td>
            <td>
              {opponent.map((opponentName) => (
                <p key={opponentName}>{opponentName}</p>
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
                  </tr>
                </thead>
                <tbody>{matchesTableRows}</tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    return <legend>you do not have any matches yet</legend>;
  }

  return <div>{renderMatchesDisplay()}</div>;
};

export default MatchView;
