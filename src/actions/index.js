export const LOAD_STEP = 'LOAD_STEP'

export default function (step) {
    return {
        type: LOAD_STEP,
        payload: step || null
    }
}