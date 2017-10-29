export const LOAD_STEP = 'LOAD_STEP'
export const SET_ANSWER = 'SET_ANSWER'

export default function (step) {
    return {
        type: LOAD_STEP,
        payload: step || null
    }
}

export function setAnswer(answer) {
    return {
        type: SET_ANSWER,
        payload: answer || null
    }
}