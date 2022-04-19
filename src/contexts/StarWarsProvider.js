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
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const getFetchApiData = async () => {
    const result = await fetchApi();
    setData(result);
  };

  const getFilteredData = (() => {
    let newdata = data.filter(({ name }) => {
      const testNameData = name.toLocaleLowerCase();
      const testNameFilter = (filterByName.name).toLocaleLowerCase();
      return testNameData.includes(testNameFilter);
    });
    filterByNumericValues.forEach((filter) => {
      newdata = newdata.filter((info) => {
        if (info[filter.column] === 'unknown') {
          return false;
        } if (filter.comparison === 'maior que') {
          return +info[filter.column] > +filter.value;
        } if (filter.comparison === 'menor que') {
          return +info[filter.column] < +filter.value;
        } if (filter.comparison === 'igual a') {
          return +info[filter.column] === +filter.value;
        }
        return null;
      });
    });
    setFilteredData(newdata);
  });

  const getFilterByNumericValues = () => {
    const object = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([
      ...filterByNumericValues,
      object,
    ]);
  };

  const { Provider } = starWarsContext;
  const { children } = props;

  const providerValues = {
    data,
    getFetchApiData,
    getFilteredData,
    filteredData,
    filterByName,
    setFilterByName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumericValues,
    getFilterByNumericValues,
  };

  return (
    <Provider value={ providerValues }>
      { children }
    </Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
