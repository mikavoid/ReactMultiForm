import { LOAD_STEP, SET_ANSWER } from '../actions'

export default function (state = [], action) {

    switch(action.type) {
        case SET_ANSWER:
            return [action.payload, ...state]
    }
    return state
}