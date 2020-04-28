import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import RandomCharacters from '../random-characters';
import ErrorBoundry from '../error-boundary';
import ApiService from '../../services/api-service';
import { ApiServiceProvider } from '../api-service-context';
import { CharactersPage, LocationsPage, EpisodesPage } from '../pages';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.sass';

export default class App extends Component {

  apiService = new ApiService();

  render(){
    return (
      <ErrorBoundry>
        <ApiServiceProvider value={this.apiService}>
          <Router>
            <div className="App">
              <Header />
              <RandomCharacters /> 
              <Switch>
                <Route path="/" render={() => 
                                          <div className="jumbotron">
                                            <h2>Welocme to The Rick & Morty API</h2>
                                            <p>The card on top is a random character.</p>
                                            <p>Select one of the items in the top menu to get more information.</p>
                                            <p>All data was taken from this <a href="https://rickandmortyapi.com/">resource</a>.</p>
                                          </div>
                                        } exact />
                <Route path="/characters/:id?" component={CharactersPage} />
                <Route path="/locations/:id?" component={LocationsPage} />
                <Route path="/episodes/:id?" component={EpisodesPage} />
                
                <Redirect to='/' />
              </Switch>
              <Footer />
            </div>
          </Router>
        </ApiServiceProvider>
      </ErrorBoundry>
    );
  }
}