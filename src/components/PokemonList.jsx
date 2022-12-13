import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import PokemonIcon from "./PokemonIcon";
import { Link } from "react-router-dom";
import pokeball from '../icons/pokeball.png';
import './styles.css'

export default function PokemonList(props) {
  return (
    <>
    <Grid item xs={12}>
      <div>
        <List className="list">
        {props.pokemon.map((pok) => {
            return(
              
             <ListItem  className="listItem" key={pok} >
              
               <ListItemAvatar>
                 <Avatar>  <PokemonIcon icon={pokeball}/> </Avatar>
               </ListItemAvatar>
               <ListItemText primary={pok} className="listItemText"/>
               <ListItemSecondaryAction>
                <Link to={props.fav !== 'true' ? `/detail/${pok}` : ''}>
                 <IconButton edge="end" aria-label="arrow" onClick={()=>{
              props.fav !== 'true' ? console.log(false) : props.sendData(pok)
             }}>
                   <KeyboardArrowRightIcon />
                 </IconButton>
                 </Link>
               </ListItemSecondaryAction>
             </ListItem>
          
             )
        })}
       
        </List>
      </div>
    </Grid>
  </>
  )
}
