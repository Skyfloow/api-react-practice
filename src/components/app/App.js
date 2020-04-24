import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import RandomCharacters from '../random-characters';
import ErrorBoundry from '../error-boundary';
import ApiService from '../../services/api-service';
import { ApiServiceProvider } from '../api-service-context';
import { CharactersPage, LocationsPage, EpisodesPage } from '../pages';

import './App.sass';

export default class App extends Component {

  apiService = new ApiService();

  render(){
    return (
      <ErrorBoundry>
        <ApiServiceProvider value={this.apiService}>
          <div className="App">
            <Header />
            <RandomCharacters /> 
            <CharactersPage />
            <LocationsPage />
            <EpisodesPage />
            <Footer />
          </div>
        </ApiServiceProvider>
      </ErrorBoundry>
    );
  }
}
