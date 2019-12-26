import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 980px;
  padding: 0 20px;
  margin: 0 auto;
  color: #444;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0 20px;

    strong {
      font-size: 36px;
    }

    a {
      color: #fff;
      background: #ccc;
      border-radius: 4px;
      padding: 10px 35px;
      font-size: 16px;

      & + a {
        margin-left: 10px;
      }
    }

    .new {
      background: ${lighten(0.04, '#0f472e')};
    }
  }
`;
