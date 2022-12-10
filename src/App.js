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
    <div className="lg:container text-white px-14 py-8 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
