import React, { useEffect, useRef,useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { PlayerContext } from '../context/PlayerContext';

//note:always we get string by default.
export default function Display() {
  const {albumsData}=useContext(PlayerContext);
  const displayRef=useRef(); //to access the dom element
  const location=useLocation(); ///album:id we get
  //{pathname: '/album/2', search: '', hash: '', state: null, key: '0f445nt7'}
  const  isAlbum=location.pathname.includes("album");
  const albumId=isAlbum? location.pathname.split('/').pop():"";
  const bgcolor=isAlbum && albumsData.length>0? albumsData.find((x)=>(x._id==albumId)).bgcolor:"";

  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background=`linear-gradient(${bgcolor},#121212)`
    }
    else{
      displayRef.current.style.background=`#121212`
    }
  })
  return (
    <div ref={displayRef}  className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        {
          albumsData.length>0
          ?<Routes>
          <Route path='/' element={<DisplayHome/>}></Route>
          <Route path='/album/:id' element={<DisplayAlbum album={albumsData.find((x)=>(x._id==albumId))}/>}></Route>
         </Routes>
         :null
        }

    </div>
  )
}


