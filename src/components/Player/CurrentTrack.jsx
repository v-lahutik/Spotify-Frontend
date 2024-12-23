import React, { useEffect } from "react";
import { reducerCases } from "../../reducers/playerReducer";
import { CurrentTrackContainer } from "./PlayerStyles";
import fetchData from "../../utils/fetchData";
import { useContext } from "react";
import { PlaylistsContext } from '../../reducers/playlistReducer';



export default function CurrentTrack() {
    const { state: { currentPlaying }, dispatch } = useContext(PlaylistsContext);
  useEffect(() => {
    const getCurrentTrack = async () => {
        const response= await fetchData(`https://api.spotify.com/v1/me/player/currently-playing`);
        console.log("response player", response);
     
      if (response.data !== "") {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };
    getCurrentTrack();
  }, [dispatch]);
  return (
    <CurrentTrackContainer>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </CurrentTrackContainer>
  );
}