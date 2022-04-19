import React, { useContext, useEffect } from 'react';
import FilterByName from '../components/FilterByName';
import FilterByNumericValues from '../components/FilterByNumericValues';
import Table from '../components/Table';
import starWarsContext from '../contexts/starWarsContext';

function Home() {
  const {
    data,
    filterByName,
    filterByNumericValues,
    getFetchApiData,
    getFilteredData,
  } = useContext(starWarsContext);
  useEffect(() => {
    getFetchApiData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getFilteredData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filterByName, filterByNumericValues]);
  return (
    <main>
      <FilterByName />
      <FilterByNumericValues />
      <Table />
    </main>
  );
}

export default Home;
