import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import { MangaListProvider } from '../../Contexts/MangaListContext';
import './App.css';


class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>

      <main role='main' className='mooingmanga-main'>
        {this.state.hasError && <p className='red'>There was an error!</p>}
      <MangaListProvider>
        <Switch>
          <Route exact path = '/' component={LandingPage} />
          <Route exact path = '/Login' component={LoginPage} />
          <Route exact path = '/Register' component={RegisterPage} />
        </Switch>
      </MangaListProvider>
      </main>
      </div>
    )
  }
}

export default App;