import React from 'react'
import {getCoversionUrl} from '../api.js'

export default class converter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options=''
        }
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

    render() {

    }
}