import * as Yup from 'yup';

const MatchSchema = Yup.object().shape({
  type: Yup.string().required('Required'),
  level: Yup.number()
    .min(1.5, 'Too Low!')
    .max(5.5, 'Too High!')
    .required('Required'),
  date: Yup.date().required('Required'),
  location: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  opponent_1: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  opponent_2: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  winner: Yup.string().required('Required'),
  scoreSet1You: Yup.number().min(0, 'Too Low!').max(7, 'Too High!'),
  scoreSet1Opponent: Yup.number().min(0, 'Too Low!').max(7, 'Too High!'),
  scoreSet2You: Yup.number().min(0, 'Too Low!').max(7, 'Too High!'),
  scoreSet2Opponent: Yup.number().min(0, 'Too Low!').max(7, 'Too High!'),
  scoreSet3You: Yup.number().min(0, 'Too Low!').max(10, 'Too High!'),
  scoreSet3Opponent: Yup.number().min(0, 'Too Low!').max(10, 'Too High!'),
  notes: Yup.string(),
});
export default MatchSchema;
