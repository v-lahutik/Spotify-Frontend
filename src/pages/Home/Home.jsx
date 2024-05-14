import { Header } from '../../components';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import BodyBackground from '../../components/Body/BodyStyles';

export const Home = () => {
  return (
    <>
      <div className="spotify-body">
        <Sidebar />
        <BodyBackground>
          <div className="body">
            <Header />
            <div className="body-contents">
              <Main />
            </div>
          </div>
        </BodyBackground>
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </>
  );
};
