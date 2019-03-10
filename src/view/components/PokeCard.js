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

    if (context.pokemonData) {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-12">        
                        <div className="pokeCard">
                            <h3 className="display-4">{context.pokemonData.name}</h3>
                        </div>    
                    </div>
                </div>
            </section>
        );
    } else {
        return null;
    }
};