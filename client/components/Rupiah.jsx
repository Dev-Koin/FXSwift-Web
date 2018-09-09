import React from 'react'

export default class Rupiah extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            rates: props.rates.IDR
        }
    }

    render() {
        return (
            <div>
                <input className="IDR" src={this.state.rates} />
            </div>
        )
    }
}