import React from 'react'

export default ({ input, row, onValue }) => {
  
    return (
        <div className="form-group">
            <label htmlFor={input.id}>{input.label}</label>
            <textarea 
                onChange={onValue}
                row={row || 3}
                required={input.required} 
                className="form-control" 
                id={input.id} 
                placeholder={input.placeholder}>{ input.value }</textarea>
        </div>

    )
}