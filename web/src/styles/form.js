import styled from 'styled-components';
import { lighten } from 'polished';

export const Register = styled.div`
  form {
    display: flex;
    flex-direction: column;
    /* margin-top: 30px; */

    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 15px;
    }

    div {
      display: flex;

      input:nth-child(2) {
        margin: 0 15px;
      }
    }

    /* hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.7);
    margin: 10px 0 20px;
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    font-size: 14px;
    margin: 0 0 10px;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
 */
    > button {
      width: 100%;
      margin: 15px 0 0;
      height: 44px;
      background: #0f472e;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.04, '#0f472e')};
      }
    }
  }
`;
