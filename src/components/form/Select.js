import React from 'react'

export default class Select extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {test: ''}
        this.onValue = this.onValue.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
        this.setSelected = this.setSelected.bind(this)
    }

    componentWillMount() {
        this.selected = new Set()
    }

    componentDidMount() {
        const elem = this.refs[this.props.input.id]
       this.setSelected(elem).then(() => {
        this.props.onValue([...this.selected])
       })
        console.log(this.selected)
    }

    setSelected(elementOptions) {
        return new Promise((resolve, reject) => {
            for (let option of elementOptions) {
                if (option.selected) {
                    this.selected.add(option.text)
                } else {
                    if (this.selected.has(option.text)) {
                        this.selected.delete(option.text)
                    }
                }
            }
            resolve()
        })   
    }

    onValue(e) {
        this.setSelected(e.target.options).then(() => {
            this.props.onValue([...this.selected])
        })
    }

    renderOptions() {
        return this.props.input.items.map((opt) => {
                return <option key={opt.text} value={opt.value}>{opt.text}</option>
            })
    }

    render() {
        const { input } = this.props
        return (
            <div className="form-group">
                <label htmlFor={input.id}>{input.label}</label>
                <select
                    ref={input.id}
                    onChange={this.onValue}
                    className="form-control"
                    required={input.required}
                    multiple={input.multiple}
                    id={input.id}>
                    {this.renderOptions()}
                </select>
            </div>

        )
    }
}