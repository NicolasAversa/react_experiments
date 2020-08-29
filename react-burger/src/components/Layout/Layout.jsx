import React from 'react';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <div>Toolbar, SideDrawer and Backdrop</div>
      <main>{children}</main>
    </>
  );
}

export default Layout;
