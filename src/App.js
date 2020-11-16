import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from './components/NavBar'
import DesktopsPage from './pages/DesktopsPage'
import LibraryPage from './pages/LibraryPage'
import AccountPage from './pages/AccountPage'
import { BaseCSS } from 'styled-bootstrap-grid';

function App() {
  return (
    <>
      <Router>
        <BaseCSS/>
        <NavBar/>
        <Switch>
          <Redirect exact from="/" to="/desktops"/>
          <Route path="/desktops" component={DesktopsPage}/>
          <Route path="/library" component={LibraryPage}/>
          <Route path="/account" component={AccountPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
