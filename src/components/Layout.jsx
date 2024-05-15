import { Route, Routes } from 'react-router-dom';

import { Header } from './Header';
import Sidebar from './Sidebar/Sidebar';
import BodyBackground from './Body/BodyStyles';
import Search from './Search';

import Footer from './Footer/Footer';
import Home from '../pages/Home/Home';

const Layout = () => {
  return (
    <>
      <div className="spotify-body">
        <Sidebar />
        <BodyBackground>
          <div className="body">
            <Header />
            <div className="body-contents">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </div>
          </div>
        </BodyBackground>
        {/* <BodyBackground>
          <div className="body">
            <Header />
            <div className="body-contents">
              <Main />
            </div>
          </div>
        </BodyBackground> */}
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </>
  );
};
export default Layout;
