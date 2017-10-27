import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import loadStep from '../actions'

import Field from '../components/form/Field'


class StepList extends Component
{
    constructor(props) {
        super(props)

        this.state = { currentStep : 1 }
        this.renderList = this.renderList.bind(this)
        this.loadNextStep = this.loadNextStep.bind(this)
    }

    componentWillMount() {
        this.loadNextStep()
    }

    loadNextStep() {
        this.setState({currentStep: this.state.currentStep + 1})
        const step = this.props.steps[this.state.currentStep - 1]

        return this.props.loadStep(step)
    }

    renderList() {
        this.props.steps.map((step) => {
            console.log(step)
            return (
                <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h4 class="card-title">{step.id}</h4>
                </div>
                </div>
            )
        })
    }

    renderForm() {
        const step = this.props.activeStep
        if (!step) {
            return <div>No more steps</div>
        }

        const form = (
            <form>
                {step.questions.default.map((input) => <Field key={input.id} input={input} />)}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )

        return form
        // recuperer la step

        // Pour chaque ligne générer un input adapté
        // -- Est-ce que le type est autorisé ?
        // -- render le input

        // Ajouter le submit
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
   return bindActionCreators({ loadStep: loadStep }, dispatch)
}

export default connect(mapStateToProps, mapActionsToDispatch)(StepList)