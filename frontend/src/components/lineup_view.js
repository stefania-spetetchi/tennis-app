import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getLineups } from '../actions';
import NavBar from './nav_bar';

const LineupView = () => {
  const { lineups } = useSelector((state) => state.lineups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLineups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getLineups]);

  function handleSubmitClick() {
    console.log('The email out button was clicked');
  }

  function renderLineup() {
    if (!_.isEmpty(lineups)) {
      const lineupRows = lineups.map((lineup) => (
        <tr key={lineup._id}>
          <td>{lineup.opponentTeam}</td>
          <td>{lineup.date}</td>
          <td>{lineup.time}</td>
          <td>
            <p>
              Line 1: <span className="label">{lineup.line_1_1}</span>{' '}
              <span className="label">{lineup.line_1_2}</span>
            </p>
            <p>
              Line 2: <span className="label">{lineup.line_2_1}</span>{' '}
              <span className="label">{lineup.line_2_2}</span>
            </p>
            <p>
              Line 3: <span className="label">{lineup.line_3_1}</span>{' '}
              <span className="label">{lineup.line_3_2}</span>
            </p>
          </td>
          <td>
            <button
              type="button"
              className="submit button"
              onClick={() => handleSubmitClick()}
            >
              Email Out
            </button>
          </td>
        </tr>
      ));
      return (
        <div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="medium-12 cell">
                <table>
                  <thead>
                    <tr>
                      <th width="150">Opponent Team</th>
                      <th width="150">Date</th>
                      <th width="150">Time</th>
                      <th width="200">Lineup</th>
                      <th width="100">Action</th>
                    </tr>
                  </thead>
                  <tbody>{lineupRows}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <NavBar />
      {renderLineup()}
    </div>
  );
};

export default LineupView;
