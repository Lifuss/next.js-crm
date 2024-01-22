import React from 'react';
import Sidebar from '../components/Sidebar';

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default layout;
