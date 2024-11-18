import { Route, Routes } from 'react-router-dom';

import { Header } from './Header';
import Sidebar from './Sidebar/Sidebar';
import BodyBackground from './Body/BodyStyles';

import Footer from './Footer/Footer';
import Home from '../pages/Home/Home';
import FullPlaylistComponent from '../pages/FullPlaylistComponent';
import { PlaylistsProvider } from '../reducers/playlistReducer';
import SingePlaylistComponent from '../pages/SinglePlaylistComponent/SingePlaylistComponent';
import Search from '../pages/Search/Search';
import PlayerControls from './Player/Player';

const Layout = () => {
  return (
    <><PlaylistsProvider>
      <div className="spotify-body">
        <Sidebar />
        <BodyBackground>
          <div className="body">
            <Header />
            
              <div className="body-contents">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/playlist/:playlistId" element={<SingePlaylistComponent />} />
                  <Route path="/category/:categoryId" element={<FullPlaylistComponent />} />
                  <Route path="/search" element={<Search />} />
                </Routes>
              </div>
            
          </div>
          <Footer /> 
        </BodyBackground>
       
      </div>
      <PlayerControls /></PlaylistsProvider>
    </>
  );
};
export default Layout;
