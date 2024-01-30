import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  categories: React.ReactNode;
  sales: React.ReactNode;
  stats: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

const Layout = ({
  categories,
  children,
  countries,
  sales,
  stats,
  promotions,
}: LayoutProps) => {
  return (
    <>
      {children}
      <div className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
        <div className="col-span-12">{stats}</div>
        <div className="col-span-5">{sales}</div>
        <div className="col-span-7">{categories}</div>
        <div className="col-span-6">{countries}</div>
        <div className="col-span-6">{promotions}</div>
      </div>
    </>
  );
};

export default Layout;
