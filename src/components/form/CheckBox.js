import React from 'react'

export default class CheckBox extends React.Component
{ 
    constructor (props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.onValue = this.onValue.bind(this)
    }

    componentWillMount() {
        this.selected = new Set()
    }

    toggle(label) {
        if (this.selected.has(label)) {
            this.selected.delete(label)
        } else {
            this.selected.add(label)
        }
    }

    onValue(e) {
        this.toggle(e.target.value)
        this.props.onValue(e, [...this.selected])
    }


    renderCheckBoxes() {
        const {input, checkbox } = this.props

        return input.items.map((checkbox) => {
            return (
                <div className="form-check" key={checkbox.id}>
                <label key={checkbox.id} for={checkbox.id} className="form-check-label">          
                     <input 
                        onChange={this.onValue}
                        type="checkbox" 
                        className="form-check-input" 
                        name={input.id} 
                        id={checkbox.id} 
                        key={checkbox.id}
                        value={checkbox.value}  />
                   {checkbox.text}
                </label>
                </div>

            )
        })
    }

    render() {
        return (
            <div>
                { this.renderCheckBoxes() }
            </div>
        )
    }
    
}   