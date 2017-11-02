import React from 'react'

export default class Input extends React.Component
{
    constructor(props) {
        super(props)
    }

    onValue(e) {
        this.props.onValue([e.target.value])
    }

    componentDidMount() {
        const elem = this.refs[this.props.input.id]
        this.props.onValue([elem.value])
    }

    render() {
        const {input, onValue} = this.props
        
        return (
            <div className="form-group">
                <label htmlFor={input.id}>{input.label}</label>
                <input
                    defaultValue={input.value}
                    onKeyUp={this.onValue.bind(this)}
                    required={input.required}
                    type={input.type}
                    className="form-control"
                    id={input.id}
                    ref={input.id}
                    placeholder={input.placeholder}/>
            </div>
        )
    }
}