import React from 'react'

export default class Textarea extends React.Component {
  
    onValue(e) {
        return this.props.onValue([e.target.value])
    }

    render() {
        const { input, row } = this.props
        return (
            <div className="form-group">
                <label htmlFor={input.id}>{input.label}</label>
                <textarea 
                    onChange={this.onValue.bind(this)}
                    row={row || 3}
                    required={input.required} 
                    className="form-control" 
                    id={input.id} 
                    placeholder={input.placeholder}>{ input.value }</textarea>
            </div>
    
        )
    }
    
}