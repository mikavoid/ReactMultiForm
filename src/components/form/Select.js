import React from 'react'

export default class Select extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {test: ''}
        this.onValue = this.onValue.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
    }

    componentWillMount() {
        this.selected = new Set()
    }

    onValue(e) {
        for (let option of e.target.options) {
            if (option.selected) {
                this.selected.add(option.value)
            } else {
                if (this.selected.has(option.value)) {
                    this.selected.delete(option.value)
                }
            }
        }

        this.props.onValue(e, [...this.selected])
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