import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';
import fetchApi from '../services/fetchApi';

const INTITAL_STATE_FILTER_BY_NAME = {
  name: '',
};

const StarWarsProvider = (props) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState(INTITAL_STATE_FILTER_BY_NAME);
  const [filteredData, setFilteredData] = useState([]);

  const getFetchApiData = async () => {
    const result = await fetchApi();
    setData(result);
  };

  const getFilteredData = (() => {
    const newdata = data.filter(({ name }) => {
      const testNameData = name.toLocaleLowerCase();
      const testNameFilter = (filterByName.name).toLocaleLowerCase();
      return testNameData.includes(testNameFilter);
    });
    setFilteredData(newdata);
  });

  const { Provider } = starWarsContext;
  const { children } = props;

  const value = {
    data,
    getFetchApiData,
    getFilteredData,
    filteredData,
    filterByName,
    setFilterByName,
  };

  return (
    <Provider value={ value }>
      { children }
    </Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
