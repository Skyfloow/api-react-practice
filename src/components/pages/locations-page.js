import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';
import { LocationDetails, LocationList } from '../api-components';

const LocationsPage = ({ history, match }) => {
  return (
    <Row
      left={<LocationList onItemSelected={(id) => history.push(`${id}`)} />}
      right={<LocationDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(LocationsPage);