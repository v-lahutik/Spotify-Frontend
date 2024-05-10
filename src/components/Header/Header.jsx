import { FaRegBell, FaBell } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import styled from 'styled-components';
import Button from '../Buttons/Buttons';
import { useState } from "react";


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const TopDiv = styled.div`
display: flex;
justify-content: flex-end;
margin: 8px;
`;
const BottomDiv = styled.div`
display: flex;
margin: 8px;
`;


export const Header = () => {
  const [bellIconVisible, setBellIconVisible] = useState(true);

  const toggleBellIcon = () => {
    setBellIconVisible(!bellIconVisible);
  };

  return <>
  <HeaderContainer>
      <TopDiv>
        <Button white="true">Explore premium</Button>
        <Button black="true"><GrInstallOption /> Install App</Button>
        <Button black="true" circle="true" onClick={toggleBellIcon}
        >{bellIconVisible ? <FaRegBell /> : <FaBell />}
        </Button>
        <Button black="true" circle="true">V</Button>
      </TopDiv>
      <BottomDiv>
        <Button white="true">All</Button>
        <Button grey="true">Music</Button>
        <Button grey="true">Podcasts</Button>
      </BottomDiv>
  </HeaderContainer>
</>
};


