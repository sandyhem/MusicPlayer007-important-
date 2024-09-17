import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Addalbum from './pages/Addalbum';
import Addsong from './pages/Addsong';
import Listsong from './pages/Listsong';
import Listalbum from './pages/Listalbum';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
export const url="http://localhost:4000"
export default function App() {
    return (
     <div className='flex items-start min-h-screen'>
    <ToastContainer/>
    <Sidebar/>
    <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
      <Navbar/>
      <div className='pt-8 pl-5 sm:ot-12 sm:pl-12'>
          <Routes>
            <Route path="/add-song" element={<Addsong/>}></Route>
            <Route path="/add-album" element={<Addalbum/>}></Route>
            <Route path="/list-song" element={<Listsong/>}></Route>
            <Route path="/list-album" element={<Listalbum/>}></Route>
          </Routes>
      </div>
    </div>
     </div>
    )
  }