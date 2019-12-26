import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 30px auto;
  padding: 0px 30px;

  div {
    display: flex;
  }
`;

export const Button = styled(Link)`
  width: 100%;
  margin: 0px 15px;
  background: #fff;
  color: #0f472e;
  font-size: 22px;
  border-radius: 10px !important;
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px #ccc;

  span {
    padding: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: ${lighten(0.04, '#0f472e')};
  }

  div {
    width: 100%;
    justify-content: left;
    padding-left: 20px;
  }

  &:hover {
    background: #fafafa;
  }
`;
