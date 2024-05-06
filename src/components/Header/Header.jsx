import './Header.css';
import BtnComponent from '../Buttons/Buttons';
import styled from 'styled-components';
import { LoggedInBtn } from '../Buttons/Buttons';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: rgb(16, 16, 16);
`;

export const Header = () => {
  return <>
  <HeaderContainer>
    <BtnComponent />
  </HeaderContainer>
  
    
</>
};


