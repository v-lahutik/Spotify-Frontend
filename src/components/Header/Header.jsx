import { FaRegBell, FaBell } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import Button from '../Buttons/Buttons';
import { HeaderContainer, TopDiv, BottomDiv } from './HeaderStyles';
import { useState } from "react";

export const Header = () => {
  const [bellIconVisible, setBellIconVisible] = useState(true);

  const toggleBellIcon = () => {
    setBellIconVisible(!bellIconVisible);
  };

  return <>
  <HeaderContainer>
      <TopDiv>
        <Button $white="true">Explore premium</Button>
        <Button $black="true"><GrInstallOption /> Install App</Button>
        <Button $black="true" $circle="true" onClick={toggleBellIcon}
        >{bellIconVisible ? <FaRegBell /> : <FaBell />}
        </Button>
        <Button $black="true" $circle="true">V</Button>
      </TopDiv>
      <BottomDiv>
        <Button $white="true">All</Button>
        <Button $grey="true">Music</Button>
        <Button $grey="true">Podcasts</Button>
        <Button $grey="true">Music</Button>
      </BottomDiv>
  </HeaderContainer>
</>
};


