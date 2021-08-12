import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import CustomerList from './pages/customer/customerlist/customerlist.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/customer/customerlist"
          component={CustomerList}
        />
      </Switch>
    </div>
  );
}

export default App;
