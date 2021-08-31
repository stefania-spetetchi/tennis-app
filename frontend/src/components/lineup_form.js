/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { saveLineup } from '../actions';

const LineupForm = () => {
  const dispatch = useDispatch();
  const [lineup, setLineup] = useState({
    initialValues: {
      opponentTeam: '',
      opponentCaptainEmail: '',
      date: '',
      time: '',
      line_1: '',
      line_2: '',
      line_3: '',
    },
  });

  const handleSaveLineup = () => {
    dispatch(saveLineup(lineup));
  };

  const handleLineupChange = (name) => (event) => {
    const value = name !== '' ? event.target.value : '';
    setLineup({ ...lineup, [name]: value });
  };

  return (
    <div className="grid-container">
      <div className="medium-10 cell">
        <h4>Your next match lineup:</h4>
        <Formik
          initialValues={{
            opponentTeam: '',
            opponentCaptainEmail: '',
            date: '',
            time: '',
            line_1: '',
            line_2: '',
            line_3: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            setLineup(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="opponentTeam">Opponent Team Name</label>
            <Field
              id="opponentTeam"
              name="opponentTeam"
              placeholder="Raleigh Team 1"
              value={lineup.opponentTeam || ''}
              onChange={handleLineupChange('opponentTeam')}
            />
            <label htmlFor="opponentCaptainEmail">
              Opponent Captain Email Address
            </label>
            <Field
              id="opponentCaptainEmail"
              name="opponentCaptainEmail"
              type="email"
              placeholder="jane@tennis.com"
              value={lineup.opponentCaptainEmail || ''}
              onChange={handleLineupChange('opponentCaptainEmail')}
            />
            <label htmlFor="date">Match Date</label>
            <Field
              id="date"
              name="date"
              type="date"
              placeholder="January 1, 2021"
              value={lineup.date || ''}
              onChange={handleLineupChange('date')}
            />
            <label htmlFor="time">Match Time</label>
            <Field
              id="time"
              name="time"
              type="time"
              placeholder="1pm"
              value={lineup.time || ''}
              onChange={handleLineupChange('time')}
            />
            <label htmlFor="line_1">Line 1</label>
            <Field
              id="line_1"
              name="line_1"
              placeholder="Jane and Sara"
              value={lineup.line_1 || ''}
              onChange={handleLineupChange('line_1')}
            />
            <label htmlFor="line_2">Line 2</label>
            <Field
              id="line_2"
              name="line_2"
              placeholder="Anna and Mary"
              value={lineup.line_2 || ''}
              onChange={handleLineupChange('line_2')}
            />
            <label htmlFor="line_3">Line 3</label>
            <Field
              id="line_3"
              name="line_3"
              placeholder="Julie and Monika"
              value={lineup.line_3 || ''}
              onChange={handleLineupChange('line_3')}
            />

            <label htmlFor="submit" />
            <br />
            <button
              type="submit"
              className="submit button"
              onClick={() => handleSaveLineup()}
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LineupForm;
