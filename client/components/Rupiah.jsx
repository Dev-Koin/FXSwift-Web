import React from 'react'

export default class Rupiah extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            rates: props.rates
        }
    }

    render() {
        return (
            <div>
                <input src={this.state.rates} />
            </div>
        )
    }
}