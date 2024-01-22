import Header from '@/app/components/Header';
import React from 'react';

type PageProps = {
  params: { id: string[] };
};

const Page = ({ params }: PageProps) => {
  return (
    <>
      <Header>Companies {String(params.id)}</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;
