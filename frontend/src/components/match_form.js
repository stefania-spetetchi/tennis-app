/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Formik, Field } from 'formik';
import MatchSchema from './form_yup_schema';

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
      validationSchema={MatchSchema}
      onSubmit={(values, match) => {
        console.log(values);
        props.handleChange(match);
        props.handleSaveMatch(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="medium-6 cell">
              <Form>
                <label>Type</label>
                <Field name="type" placeholder="Singles or Doubles" />
                {errors.type && touched.type ? <div>{errors.type}</div> : null}
                <label>Level</label>
                <Field name="level" />
                {errors.level && touched.level ? (
                  <div>{errors.level}</div>
                ) : null}
                <label>Date</label>
                <Field name="date" type="date" />
                {errors.date && touched.date ? <div>{errors.date}</div> : null}
                <label>Location</label>
                <Field name="location" placeholder="city or courts name" />
                {errors.location && touched.location ? (
                  <div>{errors.location}</div>
                ) : null}
                <label>Opponent 1</label>
                <Field name="opponent_1" />
                {errors.opponent_1 && touched.opponent_1 ? (
                  <div>{errors.opponent_1}</div>
                ) : null}
                <label>Opponent 2</label>
                <Field name="opponent_2" />
                {errors.opponent_2 && touched.opponent_2 ? (
                  <div>{errors.opponent_2}</div>
                ) : null}
                <label>Scores:</label>
                <label>Winner</label>
                <Field name="winner" />
                {errors.winner && touched.winner ? (
                  <div>{errors.winner}</div>
                ) : null}
                <div className="grid-container">
                  <div className="grid-x grid-padding-x">
                    <legend>Set 1:</legend>
                    <div className="medium-2 cell">
                      <label>You</label>
                      <Field name="scoreSet1You" />
                      {errors.scoreSet1You && touched.scoreSet1You ? (
                        <div>{errors.scoreSet1You}</div>
                      ) : null}
                    </div>
                    <div className="medium-2 cell">
                      <label>Opponent</label>
                      <Field name="scoreSet1Opponent" />
                      {errors.scoreSet1Opponent && touched.scoreSet1Opponent ? (
                        <div>{errors.scoreSet1Opponent}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="grid-container">
                  <div className="grid-x grid-padding-x">
                    <legend>Set 2:</legend>
                    <div className="medium-2 cell">
                      <label>You</label>
                      <Field name="scoreSet2You" />
                      {errors.scoreSet2You && touched.scoreSet2You ? (
                        <div>{errors.scoreSet2You}</div>
                      ) : null}
                    </div>
                    <div className="medium-2 cell">
                      <label>Opponent</label>
                      <Field name="scoreSet2Opponent" />
                      {errors.scoreSet2Opponent && touched.scoreSet2Opponent ? (
                        <div>{errors.scoreSet2Opponent}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="grid-container">
                  <div className="grid-x grid-padding-x">
                    <legend>Set 3:</legend>
                    <div className="medium-2 cell">
                      <label>You</label>
                      <Field name="scoreSet3You" />
                      {errors.scoreSet3You && touched.scoreSet3You ? (
                        <div>{errors.scoreSet3You}</div>
                      ) : null}
                    </div>
                    <div className="medium-2 cell">
                      <label>Opponent</label>
                      <Field name="scoreSet3Opponent" />
                      {errors.scoreSet3Opponent && touched.scoreSet3Opponent ? (
                        <div>{errors.scoreSet3Opponent}</div>
                      ) : null}
                    </div>
                  </div>
                  <label>Notes</label>
                  <Field name="notes" />
                  {errors.notes && touched.notes ? (
                    <div>{errors.notes}</div>
                  ) : null}
                </div>
                <br />
                <button type="submit" className="success button">
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>
);
export default MatchForm;
