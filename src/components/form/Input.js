import React from 'react'

export default ({ input, onValue }) => {
  
    return (
        <div className="form-group">
            <label htmlFor={input.id}>{input.label}</label>
            <input 
                onKeyUp={onValue}
                required={input.required} 
                type={input.type} 
                className="form-control" 
                id={input.id} 
                placeholder={input.placeholder} />
        </div>
    )
}