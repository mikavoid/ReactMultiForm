export const LOAD_STEP = 'LOAD_STEP'
export const SET_ANSWER = 'SET_ANSWER'
export const SUBMIT_FORM = 'SUBMIT_FORM'

export default function (step, stepBeforeAnswers) {
    console.log("load step", stepBeforeAnswers)

    if (!step.depends_on) {
        step.group = 'default'
    } else {
        // trouver la valeur pour le champ depends on
        const id = stepBeforeAnswers.findIndex((answer) => {
            return answer.id === step.depends_on[0]
        })
        
        if (id < 0) {
            console.error('Value on depends_on does not exist', step.depends_on)
        }

        step.group = stepBeforeAnswers[id].value[0]
        console.log('first', step)
        step.questions['default'] = [...step.questions[step.group.toLowerCase()]]
     
         console.log('seconde', step)
    }


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
