import React from 'react';
import TabBar from '../../components/TabBar'
import { NavLink, useRouteMatch, Route } from 'react-router-dom'
import { initialTheme } from '../../theme'
import OrganisationDataPage from './pages/OrganisationDataPage'
import CreditsPage from './pages/CreditsPage'
import InvoicesPage from './pages/InvoicesPage'
import UsagePage from './pages/UsagePage'
import UsersPage from './pages/UsersPage'
import TeamsPage from './pages/TeamsPage'
import ApiPage from './pages/ApiPage'

const activeStyle = {
  borderBottom: `3px solid ${initialTheme.primary}`,
  color: `${initialTheme.primary}`};

function AccountPage() {
  let { url } = useRouteMatch();
  return (
    <>
      <TabBar>
        <NavLink to={`${url}/organisation-data`} activeStyle={activeStyle}>
          Organisation data
        </NavLink>
        <NavLink to={`${url}/credits`} activeStyle={activeStyle}>
          Credits
        </NavLink>
        <NavLink to={`${url}/invoices`} activeStyle={activeStyle} >
          Invoices
        </NavLink>
        <NavLink to={`${url}/usage`} activeStyle={activeStyle}>
          Usage
        </NavLink>
        <NavLink to={`${url}/users`} activeStyle={activeStyle}>
          Users
        </NavLink>
        <NavLink to={`${url}/teams`} activeStyle={activeStyle}>
          Teams
        </NavLink>
        <NavLink to={`${url}/api`} activeStyle={activeStyle}>
          Api
        </NavLink>
      </TabBar>
  
      <Route exact path='/account/organisation-data' component={OrganisationDataPage} />
      <Route exact path='/account/credits' component={CreditsPage} />
      <Route exact path='/account/invoices' component={InvoicesPage} />
      <Route exact path='/account/usage' component={UsagePage} />
      <Route exact path='/account/users' component={UsersPage} />
      <Route exact path='/account/teams' component={TeamsPage} />
      <Route exact path='/account/api' component={ApiPage} />
    </>
  );
}

export default AccountPage;
