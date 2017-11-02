import React from 'react'

export default class Textarea extends React.Component {
  
    onValue(e) {
        return this.props.onValue([e.target.value])
    }

    componentDidMount() {
        const elem = this.refs[this.props.input.id]
        this.props.onValue([elem.value])
    }


    render() {
        const { input } = this.props
        return (
            <div className="form-group">
                <label htmlFor={input.id}>{input.label}</label>
                <textarea 
                    onChange={this.onValue.bind(this)}
                    row={input.row || 3}
                    required={input.required} 
                    className="form-control" 
                    id={input.id} 
                    ref={input.id} 
                    defaultValue={input.value}
                    placeholder={input.placeholder}></textarea>
            </div>
    
        )
    }
    
}