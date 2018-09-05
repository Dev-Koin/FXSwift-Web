import React from 'react'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import converter from './converter'
import {getConversion} from '../api.js'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            rates:[],
        }
        this.updateRates = this.updateRates.bind(this)
        // this.state.rates1 = this.state.rates1.bind(this)
        // this.state.rates2 = this.state.rates2.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        getConversion(this.updateRates) 
    }

    updateRates(err, res) {
        let newRates = {
            NZD: res.rates.NZD,
            AUD: res.rates.AUD,
            GBP: res.rates.GBP
        }
        this.setState({
            rates: newRates
        })
        console.log('hey', newRates)
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
                    <option>{this.updateRates}</option>
                    <option>{this.updateRates}</option>
                    <option>{this.updateRates}</option>
                </select>
        </div>
        <div class="form-group">
        <label for="sel1">Select Currency:</label>
            <select class="form-control" id="sel1">
                <option>{this.updateRates}</option>
                <option>{this.updateRates}</option>
                <option>{this.updateRates}</option>
            </select>
    </div>
</div>
        )
    }
}