import React from 'react';
import ItemList from '../item-list';
import 
      { withData,
        withApiService,
        withChildFunction,
        compose } from '../helpers';

const renderName = ({ name }) => <span> {name} </span>;

const mapCharactersMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllСharacter
  };
};

const mapLocationsMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllLocations
  };
};

const mapEpisodesMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllEpisodes
  };
};

const CharacterList = compose(
                        withApiService(mapCharactersMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                        )(ItemList);

const LocationList = compose(
                      withApiService(mapLocationsMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                      )(ItemList);


const EpisodeList = compose(
                      withApiService(mapEpisodesMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                      )(ItemList);

export {
  CharacterList,
  LocationList,
  EpisodeList
};