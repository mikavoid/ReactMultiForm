import React from 'react'

export default ({ input, onValue }) => {
  
    function renderCheckBoxes() {
        return input.items.map((checkbox) => {
            return (
                <div className="form-check" key={checkbox.id}>
                <label for={checkbox.id} className="form-check-label">          
                     <input 
                        onChange={onValue}
                        type="checkbox" 
                        className="form-check-input" 
                        name={input.id} 
                        id={checkbox.id} 
                        value={checkbox.value}  />
                   {checkbox.text}
                </label>
                </div>

            )
        })
    }

    return (
        <div>
            { renderCheckBoxes() }
        </div>
    )
}   