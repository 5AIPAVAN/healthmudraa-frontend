import React from 'react'
import { Outlet } from 'react-router-dom';

const Content = () => {

  return (
    <React.Fragment>
      <Outlet/>
    </React.Fragment>
  );
}
export default Content