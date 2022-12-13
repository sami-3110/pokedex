import axios from 'axios';
import React,{useState, useEffect} from 'react'
import DetailedView from '../../components/DetailedView'
import PokemonList from '../../components/PokemonList'
import './favpage.css';
import ArrowBack from "@material-ui/icons/ArrowBack";
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function FavPage() {
  const navigate = useNavigate();
    // const data = [
    //     "pikachu", 'bulbasaur'
    // ];
    const data = useSelector((state)=> state.pokemons.value);
    const [name, setName] = useState(data[0]);
    

    console.log("data from store: "+ data);

    const sendData = (data) => {
      setName(data);
      console.log(data);
    }



  return (
    <div className='favWrapper'>
        <h2>Favourite Page</h2>
        <button onClick={()=>navigate(-1)}><ArrowBack /></button>
        {data.length === 0 ? "No Favourites" : 
        <div className='mainContent'>
        <div className="dataBox1"> 
            <PokemonList pokemon={data} fav="true" sendData={sendData}/>
        </div>
        <div className="dataBox2"> 
        <DetailedView name = {name} star = {true}/>
        <p>Your Favourite</p>
        </div>
        </div>
        }
    </div>
  )
}
