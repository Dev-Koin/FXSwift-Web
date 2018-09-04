import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import converter from './converter'
// import {getCoversionUrl} from '../api.js'

const App = props => {
    return (
        <Router>
            <div>
             <Route exact path="/" component={converter} />  
            </div>
        </Router>
    )
}

export default App