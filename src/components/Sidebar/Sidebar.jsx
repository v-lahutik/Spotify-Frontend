import styled from 'styled-components';
import { HiOutlineHome, HiHome } from 'react-icons/hi';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { IoLibraryOutline, IoLibrary } from 'react-icons/io5';
import { useState } from 'react';

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
  const [homeIconVisible, setHomeIconVisible] = useState(true);
  const [searchIconVisible, setSearchIconVisible] = useState(true);
  const [libraryIconVisible, setLibraryIconVisible] = useState(true);

  const toggleHomeIcon = () => {
    setHomeIconVisible(!homeIconVisible);
  };

  const toggleSearchIcon = () => {
    setSearchIconVisible(!searchIconVisible);
  };
  const toggleLibraryIcon = () => {
    setLibraryIconVisible(!libraryIconVisible);
  };
  return (
    <SidebarContainer>
      <p onClick={toggleHomeIcon}>
        {homeIconVisible ? <HiOutlineHome /> : <HiHome />}
        Home
      </p>
      <p onClick={toggleSearchIcon}>
        {searchIconVisible ? <BiSearch /> : <BiSearchAlt />}
        Search
      </p>
      <p onClick={toggleLibraryIcon}>
        {libraryIconVisible ? <IoLibraryOutline /> : <IoLibrary />}
        Your Library
      </p>
    </SidebarContainer>
  );
}

export default Sidebar;
