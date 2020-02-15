import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import People from './components/People';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app-nav">
          <Link to="/people">People</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/people" component={People} />
      </Switch>
    </Router>
  );
}

export default App;
