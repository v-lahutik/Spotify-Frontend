// import { useEffect, useState } from 'react';

// export default function useUserTopItems() {
//   const [topItems, setTopItems] = useState({});
//   const myHeaders = new Headers();
//   myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

//   const requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow',
//   };
//   useEffect(() => {
//     fetch('https://api.spotify.com/v1/me/playlists', requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setTopItems(result);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return topItems;
// }

import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

export default function useUserPlaylists() {
  const [topPlaylists, setTopPlaylists] = useState({});

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/me/playlists`).then((data) => {
      setTopPlaylists(data);
    });
  }, []);

  return topPlaylists;
}
