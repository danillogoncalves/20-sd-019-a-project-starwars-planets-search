import React, { useContext } from 'react';
import starWarsContext from '../contexts/starWarsContext';

const COMPARISON = [
  'maior que',
  'menor que',
  'igual a',
];

const COLUMN_SORT = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
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
    columnSort,
    setSolumnSort,
    whatOrder,
    setWhatOrder,
    setOrder,
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
      <select
        data-testid="column-sort"
        value={ columnSort }
        onChange={ ({ target }) => setSolumnSort(target.value) }
      >
        { COLUMN_SORT.map((optionColumnSort) => (
          <option
            key={ optionColumnSort }
          >
            { optionColumnSort }
          </option>
        )) }
      </select>
      <label
        htmlFor="order-asc-id"
      >
        <input
          data-testid="column-sort-input-asc"
          id="order-asc-id"
          name="order"
          type="radio"
          value="ASC"
          onChange={ ({ target }) => setWhatOrder(target.value) }
        />
        Ascendente
      </label>
      <label
        htmlFor="order-desc-id"
      >
        <input
          data-testid="column-sort-input-desc"
          id="order-desc-id"
          name="order"
          type="radio"
          value="DESC"
          onChange={ ({ target }) => setWhatOrder(target.value) }
        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => setOrder(
          { column: columnSort, sort: whatOrder },
        ) }
      >
        ORDENAR
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
