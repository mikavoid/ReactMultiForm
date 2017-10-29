import React from 'react'

export default ({ input, onValue }) => {
  
    function renderRadioBtns() {
        return input.items.map((radio) => {
            return (
                <div key={radio.value} className="form-check">
                    <label className="form-check-label">
                    <input 
                        onChange={onValue}
                        type="radio" 
                        className="form-check-input" 
                        name={input.id} 
                        id={radio.id} 
                        value={radio.value}  />
                    {radio.text}
                    </label>
                </div>
            )
        })
    }
    return (
        <div className="form-group">
            <legend>{input.label}</legend>
            <div className="form-check">
                {renderRadioBtns()}
            </div>
        </div>
    )
}   