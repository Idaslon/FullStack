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

export const IssueList = styled.ul`
  border-top: 1px solid #eee;
  margin-top: 10px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  li + li {
    margin-top: 15px;
  }

  li {
    list-style: none;
    border: 1px solid #eee;
    border-radius: 5px;

    margin-top: 25px;
    padding: 10px;

    display: flex;

    div {
      margin-left: 20px;
      font-size: 15px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7f2ed0;
        }
      }

      span {
        margin-left: 5px;
        padding: 2px;

        font-size: 14px;
        font-weight: 600;

        background: #eee;
        border-radius: 4px;
      }

      p {
        margin-top: 7px;
        color: #666;
        font-size: 12px;
      }
    }

  }

`;
