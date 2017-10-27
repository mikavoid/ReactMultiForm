import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import loadStep from '../actions'

import Field from '../components/form/Field'


class StepList extends Component
{
    constructor(props) {
        super(props)

        this.state = { currentStep : 0 }
        this.renderList = this.renderList.bind(this)
        this.loadNextStep = this.loadNextStep.bind(this)
        this.loadPreviousStep = this.loadPreviousStep.bind(this)
        this.loadStep = this.loadStep.bind(this)
        this.renderNavButtons = this.renderNavButtons.bind(this)
    }

    componentWillMount() {
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

    renderForm() {
        const step = this.props.activeStep
        if (!step) {
            return <div>No more steps</div>
        }

        const form = (
            <form>
                <div id="formBody">   
                    {this.state.currentStep}
                    {step.questions.default.map((input) => <Field key={input.id} input={input} />)}
                </div>
                { this.renderNavButtons() }
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