import { SidebarContainer, SidebarWrapper } from './SidebarStyles';
import { HiOutlineHome, HiHome } from 'react-icons/hi';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { IoLibraryOutline, IoLibrary } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../shared/routes';
import useCategoriesPlaylists from '../../services/categories';

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
  const pathname = useLocation().pathname;
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
  const categories = useCategoriesPlaylists();
  console.log('🚀 ~ useEffect ~ categories:', categories);
  //useEffect(() => {

  // }
  // , []);

  return (
    <SidebarWrapper>
      <SidebarContainer>
        <ul>
          {menu.map((menu, index) => (
            <li key={index} className={pathname === menu.href ? 'active' : null}>
              <Link to={menu.href}>
                {pathname === menu.href ? <menu.iconActive /> : <menu.icon />}
                {menu.text}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarContainer>
      <SidebarContainer>
        <Link className="library">
          <library.icon />
          {library.text}
        </Link>
      </SidebarContainer>
    </SidebarWrapper>
  );
}
export default Sidebar;
