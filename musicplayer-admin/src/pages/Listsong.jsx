import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { url } from '../App';

const Listsong = () => {
    const [data,setData]=useState([]);
    
    const fetchSongs=async()=>{
      try{
       const response=await axios.get(`${url}/api/song/list`);
      if(response.data.success){
        setData(response.data.songs);
      }
      }
      catch(error){
        toast.error("Error Occured");
        console.log(error);
      }
    }
   const removeSong=async(id)=>{
      try {
        const response=await axios.post(`${url}/api/song/remove`,{id});
        if(response.data.success){
            toast.success(response.data.message);
            await fetchSongs();//refresh kind of thing.
        }
      } catch (error) {
        toast.error("Error Occured");
      }
   }
    useEffect(()=>{
     fetchSongs();
    },[])//whenever refresh do it.

  return (
    <div>
        <br></br>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
            <b>Image</b>
            <b>Name</b>
            <b>Album</b>
            <b>Duration</b>
            <b>Action</b>
        </div>
        {
            data.map((item,index)=>{
                return (
                    <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                        <img className='w-12' src={item.image}></img>
                        <p>{item.name}</p>
                        <p>{item.album}</p>
                        <p>{item.duration}</p>
                        <p onClick={()=>removeSong(item._id)} className='cursor-pointer bg-slate-200 text-center rounded w-4 '>x</p>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default Listsong