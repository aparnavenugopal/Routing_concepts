import React from 'react'
import { json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const events = useLoaderData();

  return (
    <>
     <EventItem event={events}/>
    </>
  )
}

export default EventDetailPage;

export async function loader({request, params}){
  const id = params.eventId;
  const response = await fetch('http//localhost:8080/events/'+ id);

  if(!response.ok){
    throw json({message: 'could not fetch details for selected event'},{
        status: 500
    })
  }else{
    const resData = await response.json();
    return resData.events;
  }
}