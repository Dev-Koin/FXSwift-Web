import React from 'react'
import Rupiah from './Rupiah'
import {getConversion} from '../api.js'

export default class Conversion extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            rates: []
        }
        this.updateRates = this.updateRates.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        getConversion(this.updateRates)
    }

    // updateRates(err, res) {
    //     this.setState(
    //         {rates: res.rates}
    //     )
    //     console.log('halo', this.rates)
    // }

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

    handleChange(e) {
        var key = e.target.name
        var value = e.target.value
        this.setState({[key]: value})
    }

    handleSubmit(e) {
        e.preventDefault()
    }
// Try to use .map to render currencies
// make sure storing from the API. make sure that what I wanted in state look like what it looks like
    render() {
        console.log('hey', this.state)
        return (
            <div>    
                 
            <div class="form-group">
                <label for="sel1">Select Currency:</label>
                    <select class="form-control" id="sel1">
                        <option>{this.state.rates.length !== 0 && <Rupiah rates={this.state.rates.IDR}/>}IDR</option>
                        <option>{this.state.rates.length !== 0 && <Rupiah rates={this.state.rates.IDR}/>}RUB</option>
                        <option>{this.state.rates.length !== 0 && <Rupiah rates={this.state.rates.IDR}/>}NZD</option>
                    </select>
                    <input type="text"></input>
            </div>
            <div class="form-group">
            <label for="sel1">Select Currency:</label>
                <select class="form-control" id="sel1">
                <option>{this.state.rates.length !== 0 && <Rupiah rates={this.state.rates.IDR}/>}IDR</option>
                <option>{this.state.rates.length !== 0 && <Rupiah rates={this.state.rates.IDR}/>}RUB</option>
                <option>{this.state.rates.length !== 0 && <Rupiah rates={this.state.rates.IDR}/>}NZD</option>
                </select>
                <input type="text"></input>
        </div>
    </div>
        )
    }
} 