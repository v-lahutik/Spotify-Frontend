import { SidebarContainer } from './SidebarStyles';
import { HiOutlineHome, HiHome } from 'react-icons/hi';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { IoLibraryOutline, IoLibrary } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../shared/routes';

function Sidebar() {
  const menu = [
    { iconActive: HiHome, icon: HiOutlineHome, href: '/', text: 'Home' },
    { iconActive: BiSearchAlt, icon: BiSearch, href: '/search', text: 'Search' },
  ];

  const library = {
    iconActive: IoLibrary,
    icon: IoLibraryOutline,
    text: 'Your Library',
  };

  const [active, setActive] = useState();
  // const location = useLocation();
  // const [homeIconVisible, setHomeIconVisible] = useState(true);
  // const [searchIconVisible, setSearchIconVisible] = useState(true);
  // const [libraryIconVisible, setLibraryIconVisible] = useState(true);

  // const toggleHomeIcon = () => {
  //   setHomeIconVisible(!homeIconVisible);
  // };

  // const toggleSearchIcon = () => {
  //   setSearchIconVisible(!searchIconVisible);
  // };
  // const toggleLibraryIcon = () => {
  //   setLibraryIconVisible(!libraryIconVisible);
  // };
  return (
    <SidebarContainer>
      <ul>
        {menu.map((menu, index) => (
          <li key={index} className={active ? 'active' : null}>
            <Link to={menu.href}>
              {active ? <menu.iconActive /> : <menu.icon />}
              {menu.text}
            </Link>
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
}
export default Sidebar;
