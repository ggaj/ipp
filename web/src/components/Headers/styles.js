import styled from 'styled-components';

export const Container = styled.div`
  background: #0f472e;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #eee;
    }

    a {
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
