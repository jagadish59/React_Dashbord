import React from 'react'
import {Routes, Route, Outlet  } from 'react-router-dom';
import  {Homes}  from './home/Homes';
import { Single } from './single/Single';
export const Dashbord = () => {
  return (
        <Routes>
    <Route index element={<Homes/>}/>
    <Route path='single' element={<Single/>}/>
</Routes>
  )
}
