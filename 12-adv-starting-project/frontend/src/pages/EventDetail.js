import React from 'react'
import { json, redirect, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useLoaderData();

  return (
    <>
     <EventItem event={data.event}/>
    </>
  )
}

export default EventDetailPage;

export async function loader({request, params}){
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+ id);

  if(!response.ok){
    throw json({message: 'could not fetch details for selected event'},{
        status: 500
    })
  }else{
    return response;
  }
}

export async function action({ params, request }){
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+ eventId, {
        method: request.method,
    });
  
    if(!response.ok){
      throw json({message: 'could not delete the selected item'},{
          status: 500
      })
    }else{
      return redirect('/events');
    }
  }
 
