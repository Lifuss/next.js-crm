import MagicButton from '@/app/components/magicButton';
import React from 'react';

type PageProps = {};

const Page = (props: PageProps) => {
  return (
    <main>
      <h1 className="text-xl">Dashboard</h1>
      <MagicButton />
    </main>
  );
};

export default Page;
