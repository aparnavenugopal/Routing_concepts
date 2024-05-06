import React from 'react'
import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation } from 'react-router-dom';

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
        <MainNavigation/>
        <main>
            {/* {navigation.state === 'loading' && <p>loading...</p>} */}
            <Outlet/>
        </main>
    </div>
  )
}

export default Root;