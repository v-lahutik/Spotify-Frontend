import { SidebarContainer, SidebarWrapper } from './SidebarStyles';
import { HiOutlineHome, HiHome } from 'react-icons/hi';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { IoLibraryOutline, IoLibrary } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import useUser from '../../services/user';
import useUserPlaylists from '../../services/topPlaylists';
import VerticalCard from '../Cards/VerticalCard';
import { useState, useEffect } from 'react';
import useCategoriesPlaylists from '../../services/categories';

function Sidebar() {
  const playlists = useUserPlaylists(5);
  const [topPlaylists, setTopPlaylists] = useState(null);
  const cat = useCategoriesPlaylists();
  console.log(' cat:', cat);

  useEffect(() => {
    setTopPlaylists(playlists);
  }, [playlists]);

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

  const user = useUser();
  // console.log('🚀 ~ Sidebar ~ user:', user);
  // console.log('🚀 ~ Sidebar ~ topItems:', topPlaylists);

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
        <div className="playlist-wrapper">
          {topPlaylists?.items?.map((playlist) => (
            <VerticalCard
              key={playlist.id}
              playlistCover={playlist.images?.[0]?.url || null}
              playlistName={playlist.name}
              playlistType={playlist.type}
              playlistOwner={playlist.owner.display_name}
            />
          ))}
        </div>
      </SidebarContainer>
    </SidebarWrapper>
  );
}
export default Sidebar;
