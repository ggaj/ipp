import styled from 'styled-components';
import { darken } from 'polished';

export const ListView = styled.div`
  border-radius: 8px;
  padding: 20px 20px;
  background: #fff;

  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        strong {
          font-size: 18px;
          font-weight: normal;
        }

        div {
          padding: 5px 0;
          color: #ccc;
        }
      }

      & + li {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #eee;
      }
    }
  }

  .edit {
    color: #444;
    border: 1px solid #444;
    border-radius: 4px;
    padding: 8px 20px;
    font-size: 16px;

    &:hover {
      background: #444;
      border: none;
      color: #fff;
    }
  }

  .remove {
    border-radius: 4px;
    padding: 8px 10px;
    font-size: 16px;
    /* background: #f0091f; */
    color: #f0091f;
    margin-left: 10px;

    &:hover {
      color: ${darken(0.06, '#f0091f')};
    }
  }
`;
