import React from 'react'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import converter from './converter'
import {getConversion} from '../api.js'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            rates1: '',
            rates2: '',
            numbers:''
        }
        this.state.rates1 = this.state.rates1.bind(this)
        this.state.rates2 = this.state.rates2.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        var key = e.target.name
        var value = e.target.value
        this.setState({[key]: value})
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    getConversion() {
        this.state.rates1 = this.state.rates2
        console.log('hai',rates1)
    }

    render() {
        return (
        <div class="form-group">
            <label for="sel1">Select list (select one):</label>
                <select class="form-control" id="sel1">
                    <option>{this.state.rates1}</option>
                </select>
        </div>
        )
    }
}