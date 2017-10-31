import axios from 'axios'

import { LOAD_STEP, SET_ANSWER, SUBMIT_FORM } from '../actions'

export default function (state = [], action) {

    switch(action.type) {
        case SET_ANSWER:
            return [action.payload, ...state]

        case SUBMIT_FORM:
            console.log('submit form');
            return axios.post('http://127.0.0.1:3000/form', action.payload)
    }
    return state
}