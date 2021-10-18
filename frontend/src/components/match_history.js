/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './nav_bar';
import { saveMatch } from '../actions';
import MatchView from './match_view';
import MatchForm from './match_form';

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

  const handleSaveMatch = (values) => {
    dispatch(saveMatch(values));
  };

  const handleChange = (value) => (event) => {
    const data = value !== '' ? event.target.value : '';
    setMatch({ ...match, [value]: data });
  };

  return (
    <div>
      <NavBar />
      <MatchForm
        match={match}
        setMatch={setMatch}
        handleSaveMatch={handleSaveMatch}
        handleChange={handleChange}
      />
      <MatchView />
    </div>
  );
};

export default MatchHistory;
