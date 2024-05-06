import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RouteLayout from './pages/Route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout/>,
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
