import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #7f2ed0;
    margin-bottom: 10px;
  }

  h1 {
    margin: 10px 0;
  }

  img {
    width: 120px;
    border-radius: 50%;
  }

  p {
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
    color: #666;
  }


`;
