import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RouteLayout from './pages/Route';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout/>,
    errorElement: <ErrorPage/>,
    children :[
      { index: true, path: '/', element:<Home/> },
      { path:'/products', element:<Products/>},
      { path: '/products/:productId', element:<ProductDetailPage/>}
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
