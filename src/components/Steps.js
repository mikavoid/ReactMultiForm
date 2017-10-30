import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import loadStep, { setAnswer } from '../actions'

import Field from '../components/form/Field'


class StepList extends Component
{
    constructor(props) {
        super(props)

        this.state = { 
            currentStep : 0,
            answers : []
        }

        this.renderList = this.renderList.bind(this)
        this.loadNextStep = this.loadNextStep.bind(this)
        this.loadPreviousStep = this.loadPreviousStep.bind(this)
        this.loadStep = this.loadStep.bind(this)
        this.renderNavButtons = this.renderNavButtons.bind(this)
        this.onValue = this.onValue.bind(this)
    }

    initStepAnswers() {
        const questionGroup = 'default'
        const step = this.props.activeStep || this.props.steps[0]
        const questions = step.questions[questionGroup]
        const answers = [...this.state.answers]

        // Remplir les answer et ensuite passer à la suite
        if (!questions) {
            return
        }
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
            console.log('ok', this.state.answers)
        })

    }

    anwserExists(response) {
        return this.state.answers.filter((answer) => {
            return answer.id === response.id
        })
    }

    componentWillMount() {
        this.initStepAnswers(0)
        return this.props.loadStep(this.props.steps[0])
    }

    loadNextStep(e) {
        e.preventDefault()
            return this.setState({currentStep: this.state.currentStep + 1}, () => {
                return this.loadStep()
            })
    }

    loadPreviousStep(e) {
        e.preventDefault()
        return this.setState({currentStep: this.state.currentStep - 1 }, () => {
            return this.loadStep()
        })
    }

    loadStep() {
        const step = this.props.steps[this.state.currentStep]
        this.initStepAnswers()
        return this.props.loadStep(step)
    }

    renderList() {
        this.props.steps.map((step) => {
            return (
                <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h4 class="card-title">{step.id}</h4>
                </div>
                </div>
            )
        })
    }

    submit(e) {
        e.preventDefault()
        alert('submit')
    }

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
                    <button type="button" className="btn btn-primary" onClick={this.submit}>Finish</button>
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

    onValue(data) {
        console.log('data', data)
        // On récupère la réponse dans le state
        const responseIndex = this.state.answers.findIndex((answer) => answer.id == data.fieldInfos.id)
        const answers = [...this.state.answers]
        answers[responseIndex].value = data.value
        this.setState({answers}, () => {
            console.log('###', this.state.answers)
        })

        
        
        // Chercher de quel champs la valeur provient
        // La stocker dans les answers sous cette forme
        /*const obj = {
            step: 0,
            infos: {
                id: "interet_general",
                label: "interet general"
            },
            value: 'blabla'
        }*/
    }

    renderForm() {
        const step = this.props.activeStep
        if (!step) {
            return <div>No more steps</div>
        }

        const form = (
            <form>
                <div id="formBody">   
                    {this.state.currentStep}
                    {step.questions.default.map((input) => <Field  onValue={this.onValue} key={input.id} input={input} />)}
                </div>
                { this.renderNavButtons() }
            </form>
        )
        return form
    }

    render() {
        return (
            <div>
                { this.renderForm() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        steps : state.steps,
        activeStep : state.activeStep
    }
}

function mapActionsToDispatch(dispatch) {
   return bindActionCreators({ loadStep, setAnswer }, dispatch)
}

export default connect(mapStateToProps, mapActionsToDispatch)(StepList)