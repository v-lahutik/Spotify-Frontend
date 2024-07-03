import Main from '../../components/Main/Main';
import { PlaylistsProvider } from '../../reducers/playlistReducer';

function Home() {
  return (
    
    <>
    <PlaylistsProvider>
      <Main />
    </PlaylistsProvider>
    </>
  );
}

export default Home;
