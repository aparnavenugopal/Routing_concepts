import React from 'react'
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Error = () => {
  const error = useRouteError();
  
  let title="An error occured!";
  let message="something went wrong";

  if(error.status === 500){
    message = error.data.message;
  }

  if(error.status === 404){
    title='not found!'
    message='could not find resoruce or page'
  }
  return (
    <div>
        <MainNavigation/>
        <PageContent title={title}/>
        <p>{message}</p>
    </div>
  )
}

export default Error;