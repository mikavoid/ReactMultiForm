import React from 'react'

export default ({ input }) => {
  
    return (
        <div className="form-group">
            <label htmlFor={input.id}>{input.label}</label>
            <input 
                required={input.required} 
                type={input.type} 
                className="form-control" 
                id={input.id} 
                placeholder={input.placeholder} />
        </div>
    )
}