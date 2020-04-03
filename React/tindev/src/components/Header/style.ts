import styled from 'styled-components';

interface UserLogoProps {
  src: string
}

export const Container = styled.div`
  height: 80px;
  background: #7159c1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  color: #FFF;
  font-weight: bolder;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
  }
`;

export const UserLogo = styled.img<UserLogoProps>`
  src: url(${(props) => props.src});

  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
