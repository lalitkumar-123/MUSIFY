import React from 'react'
import Login from './Login.js'
import Dashboard from './Dashboard.js'
import Favourites from './Favourites.js'
import Discover from './Discover.js'
import Search from './Search.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return ( 
      <>  
      <Router>
      <Switch>
        <Route exact path={"/"} component={() => <Login code={code}/>}/>
        <Route exact path="/dashboard" component={<Dashboard code={code}/>}/>
        <Route exact path="/favourites" component={<Favourites code={code}/>}/>
        <Route exact path="/discover" component={<Discover code={code}/>}/>
        <Route exact path="/search" component={Search}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
