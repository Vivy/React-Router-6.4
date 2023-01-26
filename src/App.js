import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import RootLayout from './layouts/rootlayout';
import HelpLayout from './layouts/helplayout';
import Faq from './pages/help/faq';
import Contact, { contactAction } from './pages/help/contact';
import NotFount from './pages/notfound';
import Careers, { careersLoader } from './pages/careers/careers';
import CareersLayout from './layouts/careerlayouts';
import CareerDetailes, { careerDetailesLoader } from './pages/careers/careerdetailes';
import CareerError from './pages/careers/careererror';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout />} >
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareerError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route path=':id' element={<CareerDetailes />} loader={careerDetailesLoader}
        />
      </Route>

      <Route path='*' element={<NotFount />} />
    </Route>
  )
)
function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App
