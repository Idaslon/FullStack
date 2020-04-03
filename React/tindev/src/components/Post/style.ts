import styled from 'styled-components';

export const Container = styled.div`
  background: white;

  padding: 15px;

  display: flex;
  flex-direction: column;
`;


export const PostHeader = styled.div`
  display: flex;

  img {
    margin-right: 10px;
  }

  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const Title = styled.div`
  font-size: 14;
  margin-bottom: 20px;
`;
