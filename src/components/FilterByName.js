import React, { useContext } from 'react';
import starWarsContext from '../contexts/starWarsContext';

function FilterByName() {
  const { filterByName: { name }, setFilterByName } = useContext(starWarsContext);

  return (
    <div>
      <h1>Filter By Name</h1>
      <input
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
        type="text"
      />
    </div>
  );
}

export default FilterByName;
