import React, {Fragment} from 'react'
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Blog from './components/layout/Blog'
import Forum from './components/layout/Forum'

const App = () => {
    return (
    <Router>
        <Fragment>
            <Navbar />
            <Route exact path='/' component={Landing}/>
            <section className="container mt-3">
                <Switch>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/blog' component={Blog}/>
                    <Route exact path='/forum' component={Forum}/>
                </Switch>
            </section>  
        </Fragment>
        </Router>
    )
    
}
  
export default App