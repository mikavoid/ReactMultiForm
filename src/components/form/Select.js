import React from 'react'

export default ({ input, onValue }) => {
  
    function renderOptions() {
        return input.items.map((opt) => {
            return <option key={opt.text} value={opt.value} >{opt.text}</option>
        })
    }

    return (
        <div className="form-group">
            <label htmlFor={input.id}>{input.label}</label>
            <select 
                onChange={onValue}
                className="form-control" 
                required={input.required}  
                multiple={input.multiple}
                id={input.id}
                >
                { renderOptions() }
            </select>
        </div>

    )
}