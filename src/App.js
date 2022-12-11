import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    }
  ])
  return (
    <div className="container px-4 mx-auto text-white py-8">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
