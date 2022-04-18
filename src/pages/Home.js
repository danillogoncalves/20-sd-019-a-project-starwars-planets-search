import React from 'react';
import FilterByName from '../components/FilterByName';
import Table from '../components/Table';

function Home() {
  return (
    <main>
      <FilterByName />
      <Table />
    </main>
  );
}

export default Home;
