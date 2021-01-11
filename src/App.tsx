import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Enroll, Home, Main } from './Components';
import { GlobalStyle } from './Style/GlobalStyle';


const App: React.FC =  () => {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Home" component={Home} />
        <Route path="/Enroll" component={Enroll} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
