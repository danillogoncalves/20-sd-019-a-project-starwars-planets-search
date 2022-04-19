import React, { useContext } from 'react';
import starWarsContext from '../contexts/starWarsContext';

const COMPARISON = [
  'maior que',
  'menor que',
  'igual a',
];

function FilterByNumericValues() {
  const {
    column,
    setColumn,
    columnList,
    comparison,
    setComparison,
    value,
    setValue,
    disableButtonFiltrar,
    setFilterByNumericValues,
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
        { columnList.map((optionColumn) => (
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
        disabled={ disableButtonFiltrar }
        onClick={ getFilterByNumericValues }
      >
        FILTRAR
      </button>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => setFilterByNumericValues([]) }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default FilterByNumericValues;
