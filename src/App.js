import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import EditUser from './components/EditUser'
import AddUser from './components/AddUser'
import { GlobalProvider } from './context/GlobalState'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <GlobalProvider>
      <div style={{ maxWidth: "30rem", margin: "4rem auto"}}>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add' exact component={AddUser} />
            <Route path='/edit/:id' exact component={EditUser} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
