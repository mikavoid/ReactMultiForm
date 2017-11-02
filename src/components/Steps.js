import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import loadStep, { setAnswer, submitForm } from '../actions'

import Field from '../components/form/Field'


class StepList extends Component
{
    constructor(props) {
        super(props)

        this.state = { 
            currentStep : 0,
            answers : [],
            group: 'default'
        }

        this.loadNextStep = this.loadNextStep.bind(this)
        this.loadPreviousStep = this.loadPreviousStep.bind(this)
        this.loadStep = this.loadStep.bind(this)
        this.renderNavButtons = this.renderNavButtons.bind(this)
        this.onValue = this.onValue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // Life Cycle Method

    componentWillMount() {
        return this.props.loadStep(this.props.steps[0], null)
    }

    componentWillReceiveProps() {
        this.initStepAnswers(this.state.currentStep)
    }

    componentDidMount() {
        //alert(this.props.activeStep)
    }


    render() {
        return (
            <div>
                { this.renderForm() }
            </div>
        )
    }

    // Event Handlers
    onSubmit(e) {
        e.preventDefault()
        return this.props.submitForm(this.state.answers)
    }

    /**
     * Called whenever an input is changed
     * @param {Array: [fieldInfos[], value]} data 
     */
    onValue(data) {
        console.log('data', data)
        const responseIndex = this.state.answers.findIndex((answer) => answer.id == data.fieldInfos.id)
        const answers = [...this.state.answers]
        console.log(this.state.answers)
        answers[responseIndex].value = data.values
        this.setState({answers})
    }

    // Methods

    /**
     * Creates a local state for answers
     * These answers will be sent to redux when loading next step
     */
    initStepAnswers(stepNumber) {
        
        const step = this.props.steps[stepNumber]

        const questions = step.questions['default']
        if (!questions) {
            return console.log('No questions found in group')
        }

        const answers = [...this.state.answers]
        for (const question of questions) {
            const response = {
                step: step.id, 
                id: question.id,
                label: question.label,
                value: ''
            }

            if (this.anwserExists(response).length <= 0){
                answers.push(response)
                console.log('pushed', response)
            }
        }

        return this.setState({answers}, () => {
            console.log('Local answers', this.state.answers)
        })

    }

    /**
     * Check if an answer already exists in the local state
     * @param {Object} response 
     */
    anwserExists(response) {
        return this.state.answers.filter((answer) => {
            return answer.id === response.id
        })
    }

    /**
     * Load and mount the next step of the form according to relationship
     * @param {*} e 
     */
    loadNextStep(e) {
        e.preventDefault()
            return this.setState({currentStep: this.state.currentStep + 1}, () => {
                return this.loadStep()
            })
    }

    /**
     * Load ans mount the previous step of the form according to relationship
     * @param {*} e 
     */
    loadPreviousStep(e) {
        e.preventDefault()
        return this.setState({currentStep: this.state.currentStep - 1 }, () => {
            return this.loadStep()
        })
    }

    /**
     * Call the redux action creator: loadStep in charge of loading the current step
     */
    loadStep() {
        const stepNumber = this.state.currentStep
        const step = this.props.steps[stepNumber]
        const answers = this.state.answers.filter((answer) => {
            return answer.step === (stepNumber - 1)
        })
        console.log('ANSWERS', answers)
        return this.props.loadStep(step, answers)
    }

    /**
     * Print navigation buttons according to the form current state
     */
    renderNavButtons() {
        if (this.state.currentStep === 0) {
            return (
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={this.loadNextStep}>Next</button>
                </div>
            )
        }

        if (!this.props.steps[this.state.currentStep + 1]) {
            return (
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={this.loadPreviousStep}>Previous</button>
                    <button type="submit" className="btn btn-primary">Finish</button>
                </div>
            )
        }

        return (
            <div className="btn-group">
                <button type="button" className="btn btn-primary" onClick={this.loadPreviousStep}>Previous</button>
                <button type="button" className="btn btn-primary" onClick={this.loadNextStep}>Next</button>
            </div>
        )
    }

    
    /**
     * Render the dynamic form
     */
    renderForm() {
        const step = this.props.activeStep
        if (!step) {
            return <div>No more steps</div>
        }

        const form = (
            <form onSubmit={this.onSubmit}>
                <div id="formBody">
                    {step.questions.default.map((input) => <Field  onValue={this.onValue} key={input.id} input={input} />)}
                </div>
                { this.renderNavButtons() }
            </form>
        )
        return form
    }
}



// Redux Stuff

function mapStateToProps(state) {
    return {
        steps : state.steps,
        activeStep : state.activeStep
    }
}

function mapActionsToDispatch(dispatch) {
   return bindActionCreators({ loadStep, setAnswer, submitForm }, dispatch)
}

export default connect(mapStateToProps, mapActionsToDispatch)(StepList)