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

    setSelected(elementOptions) {
        return new Promise((resolve, reject) => {
            for (let option of elementOptions) {
                if (option.checked) {
                    if (!this.selected.has(option.dataset.text)) {
                        this.selected.add(option.dataset.text)
                    }
                } else {
                    if (this.selected.has(option.dataset.text)) {
                        this.selected.delete(option.dataset.text)
                    }
                }
            }
            resolve()
        })   
    }

    componentDidMount() {
        const elem = document.getElementsByName(this.props.input.id)
        this.setSelected(elem).then(() => {
            this.props.onValue([...this.selected])
        })
    }

    toggle(label) {
        console.log('toggle', this.props.checkbox)
        if (this.selected.has(label)) {
            this.selected.delete(label)
        } else {
            this.selected.add(label)
        }
    }

    onValue(e) {
        this.toggle(e.target.dataset.text)
        this.props.onValue([...this.selected])
        return true
    }


    renderCheckBoxes() {
        const {input, checkbox } = this.props

        return input.items.map((checkbox) => {
            return (
                <div className="form-check" >
                <label  for={checkbox.id} className="form-check-label">          
                     <input 
                        ref={input.id}
                        key={checkbox.id}
                        defaultChecked={!!checkbox.checked}
                        onChange={this.onValue}
                        type="checkbox" 
                        className="form-check-input" 
                        name={input.id} 
                        id={checkbox.id} 
                        key={checkbox.id}
                        data-text={checkbox.text}
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