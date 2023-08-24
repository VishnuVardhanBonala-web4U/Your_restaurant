import React from 'react';
import Header from './Header';
import Table from './Table';
import Filter from './Filter';
import Card from './Card';

const Home = () => {
  return (
    <>
      {/* Header component */}
      <Header />
      <Table />
      <Filter />
      <Card />
    </>
  );
};

export default Home;
