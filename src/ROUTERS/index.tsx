import {CircularProgress} from '@mui/material';
import { lazy, Suspense } from 'react';
import {Route, Routes } from 'react-router-dom';

import ScrollToTop from '../UTILS/scroll-to-top';
import { CheckPrivateRoute, PrivateRoute } from './private-route';


const Login = lazy(() => import('../PAGES/login/index'));
const Home = lazy(()=> import('../PAGES/home/index'));

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
        </Routes>
    </ScrollToTop>
</Suspense>
 );
}

export default MainRouter;