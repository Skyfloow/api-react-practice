import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';
import { CharacterDetails, CharacterList } from '../api-components';

const CharactersPage = ({ history, match }) => {
  return (
    <Row
      left={<CharacterList onItemSelected={(id) => history.push(`${id}`)} />}
      right={<CharacterDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(CharactersPage);