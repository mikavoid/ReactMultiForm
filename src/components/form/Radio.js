import React from 'react'

export default class Radio extends React.Component
{
    constructor(props) {
        super(props)

        this.renderRadioBtns = this.renderRadioBtns.bind(this)
    }

    onValue(e) {
        return this.props.onValue([e.target.dataset.text])
    }

    
    componentDidMount() {
        const elem = this.refs[this.props.input.id]
        this.props.onValue([elem.value])
    }
  
    renderRadioBtns() {
        const { input } = this.props
        return input.items.map((radio) => {
            return (
                <div key={radio.value} className="form-check">
                    <label className="form-check-label">
                    <input 
                        ref={input.id}
                        defaultChecked={true}
                        onChange={this.onValue.bind(this)}
                        type="radio" 
                        className="form-check-input" 
                        name={input.id} 
                        id={radio.id} 
                        data-text={radio.text}
                        value={radio.value}  />
                    {radio.text}
                    </label>
                </div>
            )
        })
    }

    render() {
        const { input } = this.props

        return (
            <div className="form-group">
                <legend>{input.label}</legend>
                <div className="form-check">
                    { this.renderRadioBtns() }
                </div>
            </div>
        )
    }
   
}   