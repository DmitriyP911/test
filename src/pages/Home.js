import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useAuth } from 'hooks/hooks';

const WrapperStyled = styled.div`
  text-align: center;
`;
const pulse = keyframes`
  0% {
    -webkit-box-shadow: #03e9f4 0 0 5px;
  }
  50% {
      -webkit-box-shadow: #03e9f4 0 0 25px;
  }
  70% {
      -webkit-box-shadow: #03e9f4 0 0 50px;
  }
  100% {
      -webkit-box-shadow: #03e9f4 0 0 100px;
  }
`;

const LinkStyled = styled(Link)`
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 26px;
  color: #fff;
  transition: 0.5s;
  animation: ${pulse} 2s linear infinite;
  &:hover {
    color: #03e9f4;
  }
`;

export default function Home() {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return isLoggedIn ? (
    <h2 style={{ textAlign: 'center' }}>
      it's your Phonebook <br /> {user.name}
    </h2>
  ) : (
    <WrapperStyled>
      <h2>You can create privat </h2>
      <>
        <LinkStyled to="/register">Phonebook</LinkStyled>
      </>
    </WrapperStyled>
  );
}
