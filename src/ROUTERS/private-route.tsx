import { Navigate } from 'react-router-dom';
import { getUserToken } from '../SERVICES/sessions';

export const PrivateRoute = ({ children }: any) => {
  const auth = getUserToken();
  return auth ? children : <Navigate to='/login' />;
};

export const CheckPrivateRoute = ({ children }: any) => {
  const auth = getUserToken();

  return !auth ? children : <Navigate to='/' />;
};
