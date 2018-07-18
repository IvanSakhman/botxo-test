import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.scss';

import Home from './Home';
import NotFound from './NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <main className={styles.App}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
