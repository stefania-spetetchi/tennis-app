import NavBar from '../components/nav_bar';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {saveMatch} from '../actions';
import MatchView from './match_view';

const MatchHistory = () => {
  const dispatch = useDispatch();
  const [match, setMatch] = useState({
    type: '',
    level: '',
    date: '',
    location: '',
    opponent_1: '',
    opponent_2: '',
    winner: '',
    scoreSet1You: '',
    scoreSet1Opponent: '',
    scoreSet2You: '',
    scoreSet2Opponent: '',
    scoreSet3You: '',
    scoreSet3Opponent: '',
    notes: '',
  });

  const handleSaveMatch = () => {
    dispatch(saveMatch(match));
  }

  const handleChange = (value) => (event) => {
    const data = value === '' ? event.target.files[0] : event.target.value;
    setMatch({ ...match, [value]: data })
  };

  return (
    <div>
      <NavBar />
      <br />
      <form>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <fieldset className="medium-6 cell">
              <legend>Choose type and level:</legend>
                  <fieldset className="large-5 cell" value={match.type} onChange={handleChange('type')}>
                      <input type="radio" name="type" value="Singles" id="typeSingles" required/><label>Singles</label>
                      <input type="radio" name="type" value="Doubles" id="typeDoubles"/><label >Doubles</label>
                  </fieldset>
                <div className="medium-6 cell">
                  <label>Level 
                    <input type="text" placeholder="(2.5 to 5.0)" value={match.level} onChange={handleChange('level')} />
                  </label>
                </div>
                <div className="medium-6 cell">
                  <label>Date 
                    <input type="date" value={match.date} onChange={handleChange('date')} />
                  </label>
                </div>
                <div className="medium-6 cell">
                  <label>Location 
                    <input type="text" placeholder="city or courts name" value={match.location} onChange={handleChange('location')} />
                  </label>
                </div>
            </fieldset>
            <fieldset className="medium-6 cell">
            <legend>Opponent:</legend>
            <div className="medium-6 cell">
              <label>Opponent/s
                <input type="text" placeholder="required" value={match.opponent_1} onChange={handleChange('opponent_1')} />
              </label>
            </div>
            <div className="medium-6 cell">
              <label>Opponent/s
                <input type="text" placeholder="required" value={match.opponent_2} onChange={handleChange('opponent_2')} />
              </label>
            </div>
            <div className="medium-6 cell">
              <label>Match notes
                <input type="text" placeholder="enter any notes about the match" value={match.notes} onChange={handleChange('notes')} />
              </label>
            </div>
            <legend>Scores:</legend>
            <legend>Winner:</legend>
            <fieldset className="large-5 cell" value={match.winner} onChange={handleChange('winner')}>
              <input type="radio" name="winner" value="You" id="winYou" required/><label>You</label>
              <input type="radio" name="winner" value="Opponent" id="winOpponent"/><label >Opponent</label>
                  </fieldset>
            <div className="grid-container">
              <div className="grid-x grid-padding-x">
                <legend>Set 1:</legend>
                  <div className="medium-2 cell">
                    <label>You
                      <input type="text" placeholder="0-7" value={match.scoreSet1You} onChange={handleChange('scoreSet1You')}/>
                    </label>
                  </div>
                  <div className="medium-2 cell">
                    <label>Opponent
                      <input type="text" placeholder="0-7" value={match.scoreSet1Opponent} onChange={handleChange('scoreSet1Opponent')}/>
                    </label>
                  </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-x grid-padding-x">
                <legend>Set 2:</legend>
                  <div className="medium-2 cell">
                    <input type="text" placeholder="0-7" value={match.scoreSet2You} onChange={handleChange('scoreSet2You')}/>
                  </div>
                  <div className="medium-2 cell">
                    <input type="text" placeholder="0-7" value={match.scoreSet2Opponent} onChange={handleChange('scoreSet2Opponent')}/>
                  </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-x grid-padding-x">
                <legend>Set 3:</legend>
                  <div className="medium-2 cell">
                    <input type="text" placeholder="0-1" value={match.scoreSet3You} onChange={handleChange('scoreSet3You')}/>
                  </div>
                  <div className="medium-2 cell">
                    <input type="text" placeholder="0-1" value={match.scoreSet3Opponent} onChange={handleChange('scoreSet3Opponent')}/>
                  </div>
              </div>
            </div>
            </fieldset>
          </div>
          <button type="button" className="success button"
          onClick={() => handleSaveMatch()}>Save</button>
        </div>
      </form>
      <MatchView />
    </div>
    
  )
};

export default MatchHistory;