import React from 'react'

export default ({ input }) => {
  
    function renderCheckBoxes() {
        return input.items.map((checkbox) => {
            return (
                <div className="form-check">
                <label for={checkbox.id} className="form-check-label">          
                     <input 
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