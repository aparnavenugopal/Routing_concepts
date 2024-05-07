// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import HomePage from './pages/Home';
import EventsPage,{ loader as eventsLoader} from './pages/Events';
import EventDetailPage,{ loader as eventDetailLoader, action as deleteEventAction} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage,{ loader as editLoader} from './pages/EditEvent';
import EventsRootPage from './pages/EventsRoot';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage,{action as newsletterAction} from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement: <Error/>,
    children: [
       { index:true,path:"/", element: <HomePage/>},
       { 
        path:"events", 
        element:<EventsRootPage/>,
        children:[
          { index: true, path:"", element: <EventsPage/>, loader: eventsLoader },
          { path:":eventId", element: <EventDetailPage/>, loader:eventDetailLoader,action: deleteEventAction},
          { path:"new", element:<NewEventPage/>, action: manipulateEventAction },
          { path:":eventId/edit", element:<EditEventPage/>, loader:editLoader, action: manipulateEventAction},
          { path:"newsletter", element:<NewsletterPage/>, action:newsletterAction},
        ]
      },

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
