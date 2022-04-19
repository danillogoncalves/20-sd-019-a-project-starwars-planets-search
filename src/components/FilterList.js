import React, { useContext } from 'react';
import starWarsContext from '../contexts/starWarsContext';

function FilterList() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(starWarsContext);
  return (
    <div>
      <h1>Filter List</h1>
      { filterByNumericValues.map(({
        id,
        column,
        comparison,
        value,
      }) => (
        <div
          key={ id }
          data-testid="filter"
        >
          <span>{ column }</span>
          <span>{ comparison }</span>
          <span>{ value }</span>
          <button
            type="button"
            value={ id }
            onClick={ ({ target }) => setFilterByNumericValues(
              filterByNumericValues.filter((filter) => filter.id !== target.value),
            ) }
          >
            X
          </button>
        </div>
      )) }
    </div>

  );
}

export default FilterList;
