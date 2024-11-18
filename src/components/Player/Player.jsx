import React from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { PlayerContainer } from "./PlayerStyles";
import { useContext } from "react";
import { PlaylistsContext } from '../../reducers/playlistReducer';
import { reducerCases } from "../../reducers/playerReducer";
import fetchData from '../../utils/fetchData';
import fetchData2 from "../../utils/fetchDataPlayer";
import CurrentTrack from "./CurrentTrack";
import { PlayerWrapper } from "./PlayerStyles";

const PlayerControls=() => {
  const { state: { playerState }, dispatch } = useContext(PlaylistsContext);

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
     const changeState = await fetchData(`https://api.spotify.com/v1/me/player`);
   console.log("changeState", changeState);
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  const changeTrack = async (type) => {
    const changeTrack=await fetchData2(`https://api.spotify.com/v1/me/player/${type}`, "POST");
    console.log("changeTrack", changeTrack);
    
    dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    const response1 = await fetchData( `https://api.spotify.com/v1/me/player/currently-playing`);
    console.log("response1", response1);
    
    if (response1.data !== "") {
      const currentPlaying = {
        id: response1.data.item.id,
        name: response1.data.item.name,
        artists: response1.data.item.artists.map((artist) => artist.name),
        image: response1.data.item.album.images[2].url,
      };
      console.log("currentPlaying", currentPlaying);
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
    }
  };
  return (
    <PlayerWrapper>
      <CurrentTrack />
    <PlayerContainer>
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
      </div>
      <div className="state">
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className="repeat">
        <FiRepeat />
      </div>
    </PlayerContainer>
    </PlayerWrapper>
  );
}

export default PlayerControls;