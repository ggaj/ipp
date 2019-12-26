import React from 'react';
import { FaChurch, FaUserFriends, FaHome } from 'react-icons/fa';

import { Container, Button } from './styles';

export default function Dashboard() {
  return (
    <Container>
      {/* <div>
       */}
      <div>
        <Button to="/church">
          <span>
            <FaChurch size="30" color="#fff" />
          </span>
          <div>Igrejas</div>
        </Button>
        <Button to="/">
          <span>
            <FaUserFriends size="30" color="#fff" />
          </span>
          <div>Membros</div>
        </Button>
        <Button to="/">
          <span>
            <FaHome size="30" color="#fff" />
          </span>
          <div>Pequenos Grupos</div>
        </Button>
      </div>
    </Container>
  );
}
