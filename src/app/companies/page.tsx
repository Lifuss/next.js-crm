import React from 'react';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import SearchInput from '../components/SearchInput';

type PageProps = {};

const Page = (props: PageProps) => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar>
        <SearchInput />
      </Toolbar>
    </>
  );
};

export default Page;
