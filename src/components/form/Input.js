import React from 'react'

export default class Input extends React.Component
{
    constructor(props) {
        super(props)
    }

    render() {
        const {input, onValue} = this.props
        
        return (
            <div className="form-group">
                <label htmlFor={input.id}>{input.label}</label>
                <input
                    onKeyUp={onValue}
                    required={input.required}
                    type={input.type}
                    className="form-control"
                    id={input.id}
                    placeholder={input.placeholder}/>
            </div>
        )
    }
}