import React, { useEffect, useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Star from "@material-ui/icons/Star";
import './styles.css'
import axios from 'axios';
import { addPokemon, removePokemon } from '../features/Pokemons';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:"inherit",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    flex: '1 0 auto',
    margin:'20px',
    textAlign:'left',
    marginTop: '25%',
    textTransform:'capitalize'
  },
  cover: {
    width: '120px',
    height:'120px',
    marginTop:'25%',
    marginLeft:'10%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


export default function DetailedView(props) {
  const dispatch = useDispatch(); 
const [data, setData] = useState({});
const [loading, setLoading] = useState(true);
const [fav,setFav] = useState(props.star);


useEffect(()=>{
  
  axios.get('https://pokeapi.co/api/v2/pokemon/'+props.name).then(res => {
    
    setData(res);
    setLoading(false);
  console.log(res);
 
})
  

},[props.name])
 
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
    <div className={classes.details}>
    <div className={classes.controls}>
      {fav ?  <IconButton aria-label="previous" className='starIcon' onClick={
        () => {
          dispatch(removePokemon(props.name));
          setFav(false);
        }
      }>
          <Star style={{color:'yellow'}}/>
        </IconButton>:<IconButton aria-label="previous" className='starIcon' onClick={
          () => {
            dispatch(addPokemon(props.name));
            setFav(true);
          }
        }>
          <Star />
        </IconButton>}
        
      </div>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {props.name}
        </Typography>
        {loading ? 'Loading' :
        <Typography variant="subtitle1" color="textSecondary">
          Height: 
          {' '+Math.round(data.data.height/3.048) + '\'' + Math.round(((data.data.height/3.048)%1) * 12) + '\"'}
        </Typography>}
        { loading ? 'loading' :
        <Typography variant="subtitle1" color="textSecondary">
          Weight: {' '+ Math.round(data.data.weight/10) + ' Kg'}
        </Typography>}
        { loading ? 'loading' :
        <Typography variant="subtitle1" color="textSecondary">
           Type:  {' '+ data.data.types[0].type.name}
        </Typography>}
      </CardContent>
     
    </div>
    { loading ? 'loading' :
    <CardMedia
      className={classes.cover}
      image={data.data.sprites.front_default}
      title="Pokemon Image"
    />
  }
  </Card>


    
  )
}
