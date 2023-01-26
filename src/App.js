import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import RootLayout from './layouts/rootlayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)
function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App
