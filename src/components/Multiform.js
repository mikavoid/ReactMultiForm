import React, { Component } from 'react'

import StepList from './Steps'


export default class MultiForm extends Component
{
    constructor(props) {
        super(props)

        this.state = {done : false}
        this.renderTheContent = this.renderTheContent.bind(this)
    }

    renderTheContent() {
        if (this.state.done) {
            return (
                <div>Well done!</div>
            )
        }

        return <StepList />
    }

    render() {
        return (
            <div>
                <h1>Multi Step form</h1>  
                { this.renderTheContent() }
            </div>
        )
    }
}