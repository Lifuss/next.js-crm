import Header from '@/app/components/Header';
import React from 'react';

interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  return <Header>{`Company (${params.id})`}</Header>;
};

export default Page;
