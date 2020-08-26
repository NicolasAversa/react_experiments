import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  loginHandler: () => {},
});

export default authContext;
