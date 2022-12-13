import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {value:[]},
    reducers: {
        addPokemon: (state, action) =>{
            if(!state.value.includes(action.payload)){
                state.value.push(action.payload);
            }
            
        },
        removePokemon: (state, action) =>{

            var index = state.value.indexOf(action.payload);
            state.value.splice(index,1);

        },

    }
})

export const {addPokemon, removePokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;