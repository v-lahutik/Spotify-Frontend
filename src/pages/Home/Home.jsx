import { Header } from '../../components';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';

export const Home = () => {
  return (
    <>
      <div className="spotify-body">
        <Sidebar />
        <div className="body">
          <Header />
          <div className="body-contents">
            <Main />
          </div>
        </div>
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </>
  );
};
