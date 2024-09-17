import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { useContext } from "react";
import {PlayerContext} from "./context/PlayerContext"

export default function App() {

  const {audioRef,track,songsData}=useContext(PlayerContext);

  return (
 <div className="h-screen bg-black">
  {
    songsData.length!==0?(<>
      <div className="h-[90%] flex">
     <Sidebar/>
     <Display/> {/*routes holder*/}
  </div>
  <Player/>  
  </>):null
  }

  <audio ref={audioRef} src={track?track.file:""} preload="auto"></audio>
 </div>
  )
}