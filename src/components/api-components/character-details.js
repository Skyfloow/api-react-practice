import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApiService } from '../helpers';

const CharacterDetails = (props) => {

  return(
    <ItemDetails {...props}>
      <Record field="id" label="Id" />
      <Record field="status" label="Status" />
      <Record field="species" label="Species" /> 
      <Record field="gender" label="Gender" /> 
      <Record field="origin" label="Origin" /> 
      <Record field="location" label="Location" />               
    </ItemDetails>
  );
}

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getСharacter
  }
};

export default withApiService(mapMethodsToProps)(CharacterDetails);