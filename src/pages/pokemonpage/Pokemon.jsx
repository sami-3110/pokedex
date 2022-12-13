import React, { useEffect, useState } from 'react';
import PokemonList from '../../components/PokemonList';
import './pokemon.css';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Pokemon() {

  const [items, setItems] = React.useState(10);
  const [prevPage, setPrevPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [currPage, setCurrPage] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [pokemon, setPokemon] = React.useState([]);
  const handleChange = (event) => {
    setItems(event.target.value);
  };

  const handlePrev = () => {
    setCurrPage(prevPage);
  };

  const handleNext = () => {
    setCurrPage(nextPage);
  };


useEffect(()=>{
  axios.get(currPage+`?limit=${items}`).then(res =>{
  setPokemon(res.data.results.map(pok => pok.name));
  setPrevPage(res.data.previous);
  setNextPage(res.data.next);
})
},[items, currPage])


  return (
    <div className='pokemonWrapper'>
      <h2>Pokedex</h2>
      <div className="pokemonDataBox">
      <PokemonList pokemon = {pokemon} fav={'false'}/>
      </div>
      <div className='btnDiv'>
        <div className='left'><Link to={'/fav'}><button>Go to Favourites</button></Link></div>
        <div className='selectorDiv'>
          Items  per page: <NativeSelect
          id="demo-customized-select-native"
          value={items}
          onChange={handleChange}
          
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </NativeSelect>

        </div>
        <div className='right'>
          {prevPage !== null ? <button onClick={handlePrev}>Prev</button> : <button style={{visibility: 'hidden'}}>Prev</button>}
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}
