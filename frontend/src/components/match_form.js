/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field } from 'formik';
import FormSchema from './form_yup_schema';

const MatchForm = (props) => (
  <div>
    <h5>The WIP form</h5>
    <Formik
      initialValues={{
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
      }}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="medium-6 cell">
              <form>
                <fieldset
                  name="type"
                  value={props.match.type}
                  onChange={props.handleChange('type')}
                >
                  <fieldset>
                    <label>
                      <Field
                        type="radio"
                        name="type"
                        value="Singles"
                        id="typeSingles"
                      />
                      Singles
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="type"
                        value="Doubles"
                        id="typeDoubles"
                      />
                      Doubles
                    </label>
                  </fieldset>
                </fieldset>
                {touched.type && errors.type && <div>{errors.type}</div>}
                <label>Level</label>
                <Field
                  type="text"
                  name="level"
                  placeholder="(2.5 to 5.0)"
                  id="level"
                  value={props.match.level}
                  onChange={props.handleChange('level')}
                />
                {touched.level && errors.level && <div>{errors.level}</div>}
                <label>Date</label>
                <Field
                  type="date"
                  name="date"
                  value={props.match.date}
                  onChange={props.handleChange('date')}
                />
                {touched.date && errors.date ? <div>{errors.date}</div> : null}
                <label>Location</label>
                <Field
                  name="location"
                  type="text"
                  placeholder="city or courts name"
                  value={props.match.location}
                  onChange={props.handleChange('location')}
                />
                {touched.location && errors.location ? (
                  <div>{errors.location}</div>
                ) : null}
                <div className="medium-6 cell">
                  <label>Opponent/s</label>
                  <Field
                    type="text"
                    name="opponent_1"
                    placeholder="required"
                    value={props.match.opponent_1}
                    onChange={props.handleChange('opponent_1')}
                  />
                  {touched.opponent_1 && errors.opponent_1 && (
                    <div>{errors.opponent_1}</div>
                  )}
                  <Field
                    type="text"
                    name="opponent_2"
                    placeholder="required"
                    value={props.match.opponent_2}
                    onChange={props.handleChange('opponent_2')}
                  />
                  <label>Match notes</label>
                  <Field
                    type="text"
                    name="notes"
                    placeholder="enter any notes about the match"
                    value={props.match.notes}
                    onChange={props.handleChange('notes')}
                  />
                  <legend>Scores:</legend>
                  <legend>Winner:</legend>
                  <fieldset
                    className="large-5 cell"
                    value={props.match.winner}
                    onChange={props.handleChange('winner')}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="winner"
                        value="You"
                        id="winYou"
                        required
                      />
                      You
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="winner"
                        value="Opponent"
                        id="winOpponent"
                      />
                      Opponent
                    </label>
                  </fieldset>
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <legend>Set 1:</legend>
                      <div className="medium-2 cell">
                        <label>
                          You
                          <input
                            type="text"
                            placeholder="0-7"
                            value={props.match.scoreSet1You}
                            onChange={props.handleChange('scoreSet1You')}
                          />
                        </label>
                      </div>
                      <div className="medium-2 cell">
                        <label>
                          Opponent
                          <input
                            type="text"
                            placeholder="0-7"
                            value={props.match.scoreSet1Opponent}
                            onChange={props.handleChange('scoreSet1Opponent')}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <legend>Set 2:</legend>
                      <div className="medium-2 cell">
                        <input
                          type="text"
                          placeholder="0-7"
                          value={props.match.scoreSet2You}
                          onChange={props.handleChange('scoreSet2You')}
                        />
                      </div>
                      <div className="medium-2 cell">
                        <input
                          type="text"
                          placeholder="0-7"
                          value={props.match.scoreSet2Opponent}
                          onChange={props.handleChange('scoreSet2Opponent')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <legend>Set 3:</legend>
                      <div className="medium-2 cell">
                        <input
                          type="text"
                          placeholder="0-1"
                          value={props.match.scoreSet3You}
                          onChange={props.handleChange('scoreSet3You')}
                        />
                      </div>
                      <div className="medium-2 cell">
                        <input
                          type="text"
                          placeholder="0-1"
                          value={props.match.scoreSet3Opponent}
                          onChange={props.handleChange('scoreSet3Opponent')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="success button"
                  onClick={() => props.handleSaveMatch()}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>
);
export default MatchForm;
