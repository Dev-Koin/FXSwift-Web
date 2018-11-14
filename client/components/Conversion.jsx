import React from 'react'
//import Price from 'react-forex-price'
import {getConversion} from '../api.js'

export default class Conversion extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            rates: []
        }
        this.updateRates = this.updateRates.bind(this)
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

   componentDidMount(){
       getConversion(this.updateRates)
   }


   updateRates(err, res) {
    let newRates = {
        NZD: res.rates.NZD,
        IDR: res.rates.IDR,
        RUB: res.rates.RUB
    }
    this.setState({
        rates: newRates
    })
    console.log('halo', newRates)
}

//    handleChange(e) {
//        var key = e.target.name
//        var value = e.target.value
//        this.setState({[key]: value})
//    }

    // handleSubmit(e) {
    //     e.preventDefault()
    // }
// Try to use .map to render currencies
// make sure storing from the API. make sure that what I wanted in state look like what it looks like
    render() {
        console.log('hey', this.state)
        return (
            <div>
                <p>Today's Russian Rubel is {this.state.rates.RUB}</p>
                <p>Today's Indonesian Rupiah is {this.state.rates.IDR}</p>
                <p>Today's New Zealand Dollar is {this.state.rates.NZD}</p>
            </div>
        )
    }
} 