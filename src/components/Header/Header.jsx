import { FaRegBell } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import styled from 'styled-components';
import Button from '../Buttons/Buttons';

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
  return <>
  <HeaderContainer>
      <TopDiv>
        <Button white>Explore premium</Button>
        <Button black><GrInstallOption /> Install App</Button>
        <Button black circle>
          <FaRegBell />
        </Button>
        <Button black circle>V</Button>
      </TopDiv>
      <BottomDiv>
        <Button white>All</Button>
        <Button grey>Music</Button>
        <Button grey>Podcasts</Button>
      </BottomDiv>
  </HeaderContainer>
</>
};


