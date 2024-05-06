import React from 'react'
import { Outlet } from 'react-router-dom';

const RouteLayout = () => {
  return (
    <>
     <h1>Root layout</h1>
     <Outlet/>
    </>
  )
}

export default RouteLayout;