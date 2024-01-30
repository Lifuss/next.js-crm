import React from 'react';
import Sidebar from '../components/Sidebar';

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  console.log('rendering');

  return (
    <>
      <Sidebar />
      <main className="ml-60">{children}</main>
    </>
  );
};

export default layout;
