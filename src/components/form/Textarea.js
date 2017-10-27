import React from 'react'

export default ({ input, row }) => {
  
    return (
        <div className="form-group">
            <label htmlFor={input.id}>{input.label}</label>
            <textarea 
                row={row || 3}
                required={input.required} 
                className="form-control" 
                id={input.id} 
                placeholder={input.placeholder}>{ input.value }</textarea>
        </div>

    )
}