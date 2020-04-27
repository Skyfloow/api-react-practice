import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';
import { EpisodeDetails, EpisodeList } from '../api-components';

const EpisodesPage = ({ history, match }) => {
  return (
    <Row
      left={<EpisodeList onItemSelected={(id) => history.push(`${id}`)} />}
      right={<EpisodeDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(EpisodesPage);