import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApiService } from '../helpers';

const LocationDetails = (props) => {
  return(
    <ItemDetails {...props}>
      <Record field="id" label="Id" />
      <Record field="name" label="Name" />
      <Record field="type" label="Type" /> 
      <Record field="dimension" label="Dimension" /> 
      <Record field="residents" label="Residents" /> 
      <Record field="created" label="Created" />                  
    </ItemDetails>
  );
};

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getLocation
  }
};

export default withApiService(mapMethodsToProps)(LocationDetails);