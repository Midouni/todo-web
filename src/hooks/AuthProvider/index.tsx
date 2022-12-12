/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { createContext, FunctionComponent, useEffect } from 'react';

import { useNavigate } from 'react-router';
import { useAppDispatch } from '../useReduxHooks';
import { destoryToken } from '../../redux/features/auth/authSlice';
import { Header } from '../../components/Header';

interface AuthUserInterface {

}

const AuthUser = createContext<AuthUserInterface | null>(null);
interface AuthUserProviderProps {
  children: React.ReactNode
}
const AuthUserProvider: FunctionComponent<AuthUserProviderProps> = ({
  children,
}) => {

  const navigate = useNavigate()
  const hasAccess = localStorage.getItem('access-token');
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(destoryToken());
    navigate('/login');
  }

  useEffect(() => {
    if (!hasAccess) {
      navigate('/login', { replace: true });
    }
  }, [hasAccess, navigate])

  return (
    <>
      {
        hasAccess &&
        <AuthUser.Provider
          value={{}}
        >
          <Header onLogout={onLogout}/>
          <div className='app'>
            {children}
          </div>
        </AuthUser.Provider>
      }
    </>
  );
};

export { AuthUserProvider as default, AuthUser };
