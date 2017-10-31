import { combineReducers } from 'redux';

import StepsReducer from './reducer_steps'
import ActiveStepReducer from './reducer_active_step'
import AnswersReducer from './reducer_answers'

const rootReducer = combineReducers({
  steps: StepsReducer,
  activeStep: ActiveStepReducer,
  answers: AnswersReducer
});

export default rootReducer;
