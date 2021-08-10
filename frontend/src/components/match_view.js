import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatches } from '../actions';
import _ from 'lodash';

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
        const opponent = match.opponent;
      
        return (
          <tr key={match._id}>
            <td>{match.type}</td>
            <td>{match.level}</td>
            <td>{match.winner}</td>
            <td>{opponent.map((opponentName) => {
              return (
                <p key={opponentName}>{opponentName}</p>
              )
            })}</td>
            <td>{match.date}</td>
            <td>{match.location}</td>
            <td>{match.notes}</td>
            <td>{scoresList.map((scorePair) => {
              let result = '';
              if (scorePair[0] !== null && scorePair[1] !== null) {
                if (scorePair[0] > scorePair[1]) {
                  result='W'
                } else result='L'
              } else if (scorePair[0] == null && scorePair[1] == null) {
                return (<div key={scorePair}></div>)
              }
              
              return (
                <p key={scorePair}>
                  {scorePair[0]}-{scorePair[1]}{' '}{result}</p>
              )
            })}</td>
          </tr>
        )
      })

      return (
        <div>
          <table >
            <thead>
              <tr>
                <th width="200">Type</th>
                <th width="150">Level</th>
                <th width="200">Winner</th>
                <th width="200">Opponent</th>
                <th width="200">Date</th>
                <th width="150">Location</th>
                <th width="150">Notes</th>
              </tr>
            </thead>
            <tbody>{matchesTableRows}</tbody>
          </table>
        </div>
      )
    } 
    else {
      return (
        <legend>you do not have any matches yet</legend>
      )
    }
  }

  return (
    <div>
      {renderMatchesDisplay()}
    </div>   
    )
}

export default MatchView;
