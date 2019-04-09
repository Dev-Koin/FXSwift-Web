import React from 'react'
import Conversion from './Conversion'

export default class Logic extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Conversion:''
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
         return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='number' placeholder='currency'></input>
                    <br />
                    <input onChange={this.handleChange} type='number' placeholder='currency'></input>
                    <br />
                    <input onChange={this.handleChange} type='number' placeholder='currency'></input>
                    <br />
                    <input onClick={this.state} type='submit' value='Submit!' />
                </form>
             </div>
         
         )
     }
} 