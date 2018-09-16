import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Conversion from './Conversion'


const App = props => {
    return (<Router>
        <div>
        <Route exact path="/" component={Conversion} />
        </div>
    </Router>)
}

export default App