import { LOAD_STEP } from '../actions'

export default function (state = null, action) {

    console.log(action)

    switch(action.type) {
        case LOAD_STEP:
            return action.payload
    }
    return state
}