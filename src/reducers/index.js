import { combineReducers } from 'redux';

import StepsReducer from './reducer_steps'
import ActiveStepReducer from './reducer_active_step'

const rootReducer = combineReducers({
  steps: StepsReducer,
  activeStep: ActiveStepReducer
});

export default rootReducer;
