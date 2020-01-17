import React, { Component } from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Address from './pages/mapsearch/address/Address'
// import City from './pages/mapsearch/city/City'
import City from './pages/mapsearch/city/MyCity'
import Search from './pages/mapsearch/search/Search'
import Houseinfo from './pages/nav/houseinfo/Houseinfo'
import Serve from './pages/usernotice/Serve'
import Privacy from './pages/usernotice/Privacy'
import Forgetpwd from './pages/forgetpsw/Forgetpsw'
export default class App extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <HashRouter>
                    <Switch>
                        <Route path='/' exact component={Nav}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/address' component={Address}></Route>
                        <Route path='/city' component={City}></Route>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/houseinfo' component={Houseinfo}></Route>
                         <Route path='/serve' component={Serve}></Route>
                        <Route path='/privacy' component={Privacy}></Route> 
                        <Route path='/forgetpwd' component={Forgetpwd}></Route> 
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
