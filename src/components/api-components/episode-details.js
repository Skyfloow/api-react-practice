import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApiService } from '../helpers';

const EpisodeDetails = (props) => {
  return(
    <ItemDetails {...props}>    
      <Record field="id" label="Id" />
      <Record field="name" label="Name" />
      <Record field="air_date" label="Air date" /> 
      <Record field="episode" label="Episode" /> 
      <Record field="characters" label="Characters" /> 
      <Record field="created" label="Created" />               
    </ItemDetails>
  );
};

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getEpisode
  }
};

export default withApiService(mapMethodsToProps)(EpisodeDetails);