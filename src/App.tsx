import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

const App: React.FC =  () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={} />
      </Switch>
    </BrowserRouter>
    <Redirect path="*" to="/" />
    </>
  );
}

export default App;
