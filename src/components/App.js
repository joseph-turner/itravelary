/* eslint-disable import/no-named-as-default */
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

import HomePage from "./containers/HomePage";
import NotFoundPage from "./containers/NotFoundPage";
import TripDetailsPage from "./containers/TripDetailsPage";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="main-nav">
          <ul className="main-nav__list grid__row">
            <li className="main-nav__item">
              <NavLink exact to="/" className="main-nav__link" activeClassName="main-nav__link--active">Home</NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink to="/trip-details" className="main-nav__link" activeClassName="main-nav__link--active">Trip Details</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/trip-details" component={TripDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
