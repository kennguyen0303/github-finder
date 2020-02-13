import React, {Fragment,Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/user/UserItem'
import { render } from '@testing-library/react';
import Users from "./components/user/Users";
import axios from 'axios';
import Search from './components/user/Search'
import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About'

class App extends React.Component{
state={
  users:[],
  loading:true,
  alert: null
}

  /*async componentDidMount(){ //async then await go together
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`);//getting data from the web
    this.setState({users: res.data, loading:false});
    console.log(res.data);//printout the content of the data
  } */
  //seach github users
searchUsers= async (text)=>{
  const res = await axios.get(`https://api.github.com/search/users?q=${text}`);//making a query based on Github API to search for the user
    this.setState({users: res.data.items, loading:false});
    console.log(res.data);//printout the content
}

//clearUSers
clearUsers= async()=>{
  this.setState({users:[], loading: false})
}
//set Alert
setAlert=(msg,type)=>{
  this.setState({alert:{msg:msg,type:type}});
}
  render() {
    return (
      <Router>
      <div className="React_first_app">
        <Navbar title="Github Finder"/>
        <div className="container"> 
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render={props=> (
              <Fragment>
                <Search searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers}
                setAlert={this.setAlert}
                />
                <Users loading={this.state.loading} users={this.state.users}/>
              </Fragment>
            )}/>
            <Route exact path ='/about' component={About}/>
          </Switch>

        </div>
      </div>
      </Router>
    );
  };
}

export default App;
