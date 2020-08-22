import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationIcon,
  ProfileCircule,
  CaretDownIcon
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>

        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>

            <button>
              <NotificationIcon />
              <span>Notificações</span>
            </button>

            <button>
              <ProfileCircule src="http://abre.ai/bsOC" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>

      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;