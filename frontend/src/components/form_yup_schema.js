import * as Yup from 'yup';

const FormSchema = Yup.object({
  type: Yup.string().required('Required'),
  level: Yup.number().min(2, 'Too Low!').max(5, 'Too High!'),
  // .required('Level is required'),
  date: Yup.date()
    .default(function () {
      return new Date();
    })
    .required('Date is required'),
  location: Yup.string().uppercase().required('Location is Required'),
  opponent_1: Yup.string().required('At least one opponent is required'),
  opponent_2: Yup.string(),
  winner: Yup.string().required('Winner is required'),
  scoreSet1You: Yup.number()
    .min(0, 'Too Low!')
    .max(7, 'Too High!')
    .required('Required'),
  scoreSet1Opponent: Yup.number()
    .min(0, 'Too Low!')
    .max(7, 'Too High!')
    .required('Required'),
  scoreSet2You: Yup.number()
    .min(0, 'Too Low!')
    .max(7, 'Too High!')
    .required('Required'),
  scoreSet2Opponent: Yup.number()
    .min(0, 'Too Low!')
    .max(7, 'Too High!')
    .required('Required'),
  scoreSet3You: Yup.number().min(0, 'Too Low!').required('Required'),
  scoreSet3Opponent: Yup.number().min(0, 'Too Low!').required('Required'),
  notes: Yup.string().required('Required'),
});

export default FormSchema;
