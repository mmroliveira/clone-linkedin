import React from 'react';

import { Container, ProfileCircule, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircule src="http://abre.ai/bsOC" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />

    </Container>
  );
}

export default MobileHeader;