import React, { Component } from 'react'

import Input from './Input' 
import Select from './Select' 
import Textarea from './Textarea'
import Radio from './Radio'
import Checkbox from './CheckBox'



export const VALID_TYPES = {
    text: {component: Input},
    number: {component: Input},
    email: {component: Input},
    radio: {component: Radio},
    checkbox: {component: Checkbox},
    password: {component: Input},
    textarea: {component: Textarea},
    select: {component: Select},
}


export default class Field extends Component
{
    constructor(props) {
        super(props)
    }

    onValue(values = []) {
        console.log('Input recieved:', values)
        const fieldInfos = this.props.input
        return this.props.onValue({ fieldInfos, values })
    }

    buildField() {
        // check type
        const input = this.props.input
        if (! VALID_TYPES.hasOwnProperty(input.type)) {
            console.log('Input bypassed because of the inexisting type', input)
            return
        }
        const SpecificInput = VALID_TYPES[input.type].component
        return <SpecificInput onValue={this.onValue.bind(this)} input={input} rules="required" />
    }

    render() {
        return (
            <div>
                {this.buildField()}
            </div>
        )
    }
}