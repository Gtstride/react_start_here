import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Movie from '../Movie/Movie';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter basename='/react_rmdb/'>
      <React.Fragment>
        <Header />
        <Switch >
          <Route path="/" component={Home} exact/>
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;