import React, { useContext } from 'react';
import starWarsContext from '../contexts/starWarsContext';

const Table = () => {
  const {
    data,
  } = useContext(starWarsContext);
  return (
    <table>
      <tbody>
        <tr>
          { data[0] && Object.keys(data[0])
            .map((title, index) => <th key={ index }>{title}</th>)}
        </tr>
        { data.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
};

export default Table;
