import {CircularProgress} from '@mui/material';
import { lazy, Suspense } from 'react';
import {Route, Routes } from 'react-router-dom';

import ScrollToTop from '../UTILS/scroll-to-top';



const Login = lazy(() => import('../PAGES/login/index'));
const Home = lazy(()=> import('../PAGES/home/index'));
const Register = lazy(()=> import('../PAGES/register/index'));

function MainRouter() {
    return (
        <Suspense
        fallback={
            <div className='webapp-loading-wrapper'>
                <CircularProgress color='primary' />
         </div>
        }
>
<ScrollToTop>
        <Routes>
            <Route
            path='/login'
            element={
                
                  <Login />
                
              }
            />
            <Route
              path='/home'
              element={
                <Home />
              }
            />
            <Route
              path='/register'
              element={
                <Register />
              }
/>           
        </Routes>
    </ScrollToTop>
</Suspense>
 );
}

export default MainRouter;