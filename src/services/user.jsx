import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

export default function useUser() {
  const [use, setUse] = useState({});

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/me`).then((data) => {
      setUse(data);
    });
  }, []);

  return use;
}
