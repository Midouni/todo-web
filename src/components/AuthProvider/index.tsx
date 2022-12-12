/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { createContext, FunctionComponent, useEffect } from 'react';

import { useNavigate } from 'react-router';

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
          <div className='app'>{children}</div>
        </AuthUser.Provider>
      }
    </>
  );
};

export { AuthUserProvider as default, AuthUser };
