import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';
import fetchApi from '../services/fetchApi';

const INTIAL_STATE_FILTER_BY_NAME = {
  name: '',
};

const INTIAL_STATE_COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const StarWarsProvider = (props) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState(INTIAL_STATE_FILTER_BY_NAME);
  const [filteredData, setFilteredData] = useState([]);
  const [columnList, setColumnList] = useState(INTIAL_STATE_COLUMN);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [columnSort, setSolumnSort] = useState('population');
  const [whatOrder, setWhatOrder] = useState('ASC');
  const [order, setOrder] = useState({});
  const [disableButtonFiltrar, setDisableButtonFiltrar] = useState(false);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const getFetchApiData = async () => {
    const result = await fetchApi();
    setData(result);
  };

  const sortListPlanet = (list) => {
    list.sort((a, b) => {
      const BIGGER_COMPARISON = 1;
      const SMALLER_COMPARISON = -1;
      if (a.name > b.name) {
        return BIGGER_COMPARISON;
      }
      if (a.name < b.name) {
        return SMALLER_COMPARISON;
      }
      return 0;
    });
  };

  const getFilteredData = (() => {
    let newdata = data.filter(({ name }) => {
      const testNameData = name.toLocaleLowerCase();
      const testNameFilter = (filterByName.name).toLocaleLowerCase();
      return testNameData.includes(testNameFilter);
    });

    sortListPlanet(newdata);

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

    if (order.sort === 'ASC') {
      const unknownData = newdata.filter((info) => info[order.column] === 'unknown');
      newdata = newdata.filter((info) => info[order.column] !== 'unknown');
      newdata.sort((a, b) => +a[order.column] - +b[order.column]);
      newdata = [...newdata, ...unknownData];
    }
    if (order.sort === 'DESC') {
      const unknownData = newdata.filter((info) => info[order.column] === 'unknown');
      newdata = newdata.filter((info) => info[order.column] !== 'unknown');
      newdata.sort((a, b) => +b[order.column] - +a[order.column]);
      newdata = [...newdata, ...unknownData];
    }

    setFilteredData(newdata);
  });

  const getFilterByNumericValues = () => {
    const INDEX_START = 2;
    const INDEX_END = 18;
    const object = {
      id: Math.random()
        .toString()
        .substring(INDEX_START, INDEX_END) + new Date().getTime(),
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([
      ...filterByNumericValues,
      object,
    ]);
  };

  const updateColumnList = () => {
    let newColumnList = INTIAL_STATE_COLUMN;
    filterByNumericValues.forEach((filter) => {
      newColumnList = newColumnList.filter((element) => !element.includes(filter.column));
    });
    setColumnList(newColumnList);
    setColumn(newColumnList[0]);

    if (newColumnList[0]) {
      setDisableButtonFiltrar(false);
    } else {
      setDisableButtonFiltrar(true);
    }
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
    columnList,
    comparison,
    setComparison,
    value,
    setValue,
    columnSort,
    setSolumnSort,
    whatOrder,
    setWhatOrder,
    order,
    setOrder,
    disableButtonFiltrar,
    filterByNumericValues,
    setFilterByNumericValues,
    getFilterByNumericValues,
    updateColumnList,
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
