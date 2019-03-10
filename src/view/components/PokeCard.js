/**
 * Import, Variables
 */
import React, {useContext} from "react";
import { Context } from "../../store/GlobalStore";

/**
 * Render the pokemon card for only one pkmn
 */
export const PokeCard = () => {
    const context = useContext(Context);
    console.log(context);

    if (context.pokemonData) {
        return (
            <div className="pokeCard">
                <h3 className="display-4">{context.pokemonData.name}</h3>
            </div>    
        );
    } else {
        return <p>We're fetching data</p>;
    }
};