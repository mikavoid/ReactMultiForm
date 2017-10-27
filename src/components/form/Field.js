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

    buildField() {
        // check type
        const input = this.props.input
        if (! VALID_TYPES.hasOwnProperty(input.type)) {
            console.log('Input bypassed because of the inexisting type', input)
            return
        }
        const SpecificInput = VALID_TYPES[input.type].component
        return <SpecificInput input={input} rules="required" />
    }

    render() {
        return (
            <div>
                {this.buildField()}
            </div>
        )
    }
}