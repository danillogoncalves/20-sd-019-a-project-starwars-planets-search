import React, { useContext } from 'react';
import starWarsContext from '../contexts/starWarsContext';

const COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARISON = [
  'maior que',
  'menor que',
  'igual a',
];

function FilterByNumericValues() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    getFilterByNumericValues,
  } = useContext(starWarsContext);
  return (
    <div>
      <h1>Filter By Numeric Values</h1>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { COLUMN.map((optionColumn) => (
          <option key={ optionColumn }>
            { optionColumn }
          </option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        { COMPARISON.map((optionComparison) => (
          <option key={ optionComparison }>
            { optionComparison }
          </option>
        )) }
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ getFilterByNumericValues }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default FilterByNumericValues;
