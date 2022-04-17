import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';
import fetchApi from '../services/fetchApi';

const StarWarsProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const result = await fetchApi();
      setData(result);
    };
    fetchApiData();
  }, []);

  const { Provider } = starWarsContext;
  const { children } = props;

  const value = {
    data,
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
