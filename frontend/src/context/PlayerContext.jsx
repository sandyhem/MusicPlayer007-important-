import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'

export const PlayerContext=createContext();

const PlayerContextProvider=(props)=>{
   
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();
    const url='http://localhost:4000'
    
    const [songsData,setSongsData]=useState([]);
    const [albumsData,setAlbumsData]=useState([]);


    const [track,setTrack]=useState(songsData[0]);
    const [playStatus,setPlayStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    });

    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playwithid=async(id)=>{
        await songsData.map((item)=>{
            if(id===item._id){
                setTrack(item);
            }
        })
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous=async()=>{
       songsData.map(async(item,index)=>{
          if(item._id==track._id&&index>0){
             await setTrack(songsData[index-1]);
             await audioRef.current.play();
             setPlayStatus(true);
          }
       })
    }
    const next=async()=>{
        songsData.map(async(item,index)=>{
            if(item._id==track._id&&index<songsData.length){
               await setTrack(songsData[index+1]);
               await audioRef.current.play();
               setPlayStatus(true);
            }
         })
    }

    const seekSong=async(e)=>{        //give offsetX in fetched song/ourseekbar offsetwidth
      audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)
         
    }

    const getSongsData=async()=>{
        try {
            const response=await axios.get(`${url}/api/song/list`);
            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);//initialisation
        } catch (error) {
            console.log('error in getsongdata');
            console.log(error);
        }
    }
    const getAlbumsData=async()=>{
        try {
            const response=await axios.get(`${url}/api/album/list`);
            setAlbumsData(response.data.albums);
        } catch (error) {
            console.log('error in getalbumdata');
            console.log(error);
        }
    }
    //to fetch the time:
    useEffect(()=>{
     setTimeout(()=>{
        audioRef.current.ontimeupdate=()=>{
            setTime({
            currentTime:{
                second:Math.floor(audioRef.current.currentTime%60),
                minute:Math.floor(audioRef.current.currentTime/60)
            },
            totalTime:{
                second:Math.floor(audioRef.current.duration%60),
                minute:Math.floor(audioRef.current.duration/60)
            }
            })
        }
     },1000) //each sec
    },[audioRef])

    const contextvalue={
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playwithid,
        previous,next,
        seekSong,
        songsData,albumsData
    }

    useEffect(()=>{
    getSongsData();
    getAlbumsData();
    },[])

    return (
        <PlayerContext.Provider value={contextvalue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;