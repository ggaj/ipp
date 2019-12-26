import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

import { churchRegisterRequest } from '../../../store/modules/church/actions';
import { Container } from '../../../styles/header';
import { Register } from '../../../styles/form';

const options = [
  { id: 'react', title: 'ReactJS' },
  { id: 'node', title: 'NodeJS' },
  { id: 'rn', title: 'React Native' },
];

export default function ChurchRegister() {
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    cep,
    address,
    number,
    state,
    city,
    ref,
    comp,
  }) {
    dispatch(
      churchRegisterRequest(name, cep, address, number, state, city, ref, comp)
    );
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de Igreja</strong>
        <div>
          <Link to="/church" className="back">
            Voltar
          </Link>
        </div>
      </header>

      <Register>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <div>
            <InputMask mask="99.999-999">
              {() => <Input name="cep" placeholder="Seu CEP" size="10" />}
            </InputMask>
            <Input name="address" placeholder="Endereço" size="79" />
            <Input name="number" placeholder="N" size="10" />
          </div>
          <div>
            <Select name="tech" options={options} />
            {/* <Input name="state" placeholder="Estado" size="20" /> */}
            <Input name="city" placeholder="Cidade" size="29" />
            <Input name="ref" placeholder="Ponto de Ref." size="50" />
          </div>
          <Input name="comp" placeholder="Complemento" />
          <button type="submit">Salvar Dados</button>
        </Form>
      </Register>
    </Container>
  );
}
