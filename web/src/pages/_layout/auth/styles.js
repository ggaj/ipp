import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    span {
      color: #ca3c5e;
      align-self: flex-start;
      font-size: 14px;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #0f472e;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#0f472e')};
      }
    }
  }
`;
