import React, { useContext, useEffect } from 'react';
import FilterByName from '../components/FilterByName';
import FilterByNumericValues from '../components/FilterByNumericValues';
import FilterList from '../components/FilterList';
import Table from '../components/Table';
import starWarsContext from '../contexts/starWarsContext';

function Home() {
  const {
    data,
    filterByName,
    filterByNumericValues,
    order,
    getFetchApiData,
    getFilteredData,
    updateColumnList,
  } = useContext(starWarsContext);
  useEffect(() => {
    getFetchApiData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getFilteredData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filterByName, filterByNumericValues, order]);

  useEffect(() => {
    updateColumnList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  return (
    <main>
      <FilterByName />
      <FilterByNumericValues />
      <FilterList />
      <Table />
    </main>
  );
}

export default Home;
