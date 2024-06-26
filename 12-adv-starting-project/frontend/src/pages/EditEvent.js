import React from 'react';
import EventForm from './../components/EventForm';
import { useRouteLoaderData,json, useLoaderData } from 'react-router-dom';

const EditEventPage = () => {
  const data = useLoaderData();
  
  return (
    <div>
      <EventForm event={data.event} method="patch"/>
    </div>
  )
}

export default EditEventPage;

export async function loader({request, params}){
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+ id );

  if(!response.ok){
    throw json({message: 'could not fetch details for selected event'},{
        status: 500
    })
  }else{
    return response;
  }
}