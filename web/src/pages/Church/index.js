import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from '../../styles/header';
import { ListView } from './styles';

export default function Church() {
  const [churches, setChurches] = useState([]);

  useEffect(() => {
    async function loadChurches() {
      const response = await api.get('churches');
      const { data } = response;
      setChurches(data);
    }
    loadChurches();
  }, []);

  return (
    <Container>
      <header>
        <strong>Igrejas</strong>
        <div>
          <Link to="/" className="back">
            Voltar
          </Link>
          <Link to="/church/register" className="new">
            Novo
          </Link>
        </div>
      </header>
      <ListView>
        <ul>
          {churches.map(church => (
            <li key={String(church.id)}>
              <span>
                <strong>{church.name}</strong>
                <div>
                  {church.cep
                    ? `${church.address}, ${church.number} - ${church.city}`
                    : ''}
                </div>
              </span>
              <div>
                {/* <Link to="/" className="edit">
                  Editar
                </Link>
                <Link to="/" className="remove">
                  Remover
                </Link> */}
              </div>
            </li>
          ))}
        </ul>
      </ListView>
    </Container>
  );
}
