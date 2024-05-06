import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
  const events = useLoaderData();

  if(events.isError){
    return <p>{events.message}</p>
  }
  
 
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');
    if(!response.ok){
      return {isError: true, message:'could not fetch events'}
    }else{
     const resData = await response.json();
     return resData.events;
    }
 }
