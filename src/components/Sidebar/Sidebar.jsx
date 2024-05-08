import styled from "styled-components";
import { GrHomeRounded, GrSearch} from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";

const SidebarContainer = styled.div`
  background-color: rgb(18, 18, 18);
  color: rgb(246, 246, 246);
  width: 230px;
  height: 100vh;
  padding: 10px;
  border-radius: 10px;
  margin: 3px;
`;

function Sidebar() {
  return <>
  <SidebarContainer>
    <p><GrHomeRounded /> Home</p>
    <p><GrSearch /> Search</p>
    <p><VscLibrary /> Your Library</p>
  </SidebarContainer>
  </>
}

export default Sidebar;
