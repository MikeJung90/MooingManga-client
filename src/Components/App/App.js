import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import MangaList from '../MangaList/MangaList';
import Manga from '../Manga/Manga';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
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
          <Route 
            exact 
            path={'/'} 
            component={MangaList} 
          />
          <PublicRoute 
            path={'/Login'} 
            component={LoginPage} 
          />
          <PublicRoute 
            path={'/Register'} 
            component={RegisterPage} 
          />
          <PrivateRoute 
            path={'/manga/:mangaId'} 
            component={Manga} 
          />
          <Route 
            component={NotFoundPage} 
          />

          {/* <Route exact path = '/' component={LandingPage} />
          <Route exact path = '/Login' component={LoginPage} />
          <Route exact path = '/Register' component={RegisterPage} /> */}
        </Switch>
      </MangaListProvider>
      </main>
      </div>
    )
  }
}

export default App;