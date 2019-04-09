import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Conversion from './Conversion'
//import Logic from './Logic'


const App = props => {
    return (<Router>
        <div>
        <Route path="/" component={Conversion} />
        </div>
    </Router>)
}

export default App