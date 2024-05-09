import { Header } from '../../components';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import GradientBackground from '../../components/Styling/Gradient';

export const Home = () => {
  return (
    <>
      <div className="spotify-body">
        <Sidebar />
        <GradientBackground>
          <div className="body">
            <Header />
            <div className="body-contents">
              <Main />
            </div>
          </div>
        </GradientBackground>
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </>
  );
};
