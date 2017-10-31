export const LOAD_STEP = 'LOAD_STEP'
export const SET_ANSWER = 'SET_ANSWER'
export const SUBMIT_FORM = 'SUBMIT_FORM'

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

export function submitForm(answers) {
    console.log('submit', answers)
    return {
        type: SUBMIT_FORM,
        payload: answers || null
    }
}
