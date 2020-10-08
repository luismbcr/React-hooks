import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UsersList from './components/UsersList';
const App = () => {
  return (
    <Router>
      <nav>
        <li><Link to="/">Home</Link></li>
      </nav>

      <Switch>
        <Route path="/">
          <UsersList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
