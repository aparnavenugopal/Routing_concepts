import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RouteLayout from './pages/Route';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout/>,
    errorElement: <ErrorPage/>,
    children :[
      { path: '/', element:<Home/> },
      { path:'/products', element:<Products/>},
    ]
  }
 

])

function App() {
  return (
    <div>
    <RouterProvider router={router}/>

    </div>
  );
}

export default App;
