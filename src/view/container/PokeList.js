/**
 * Import, Variables
 */
import React from "react";
import {PokeCard} from "../components/PokeCard";

/**
 * Render the list of pokemon when page is loaded
 */
export const PokeList = props => {
    
    if (!props.dataFetched) return <p>We're fetching the data.</p>;
    return (
        <section className="container">
            <div className="row">
                <div className="col-12 pokeList">
                {
                    Array.isArray(props.pokemonData) ?
                        props.pokemonData.map((el, i) => {
                            return (
                                <div className="card" key={i}>
                                    <h5 className="card-header">{i + 1}</h5>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}/>
                                    <div className="card-body">
                                        <h6 className="card-title">{el.name}</h6>
                                    </div>
                                </div>
                            );
                        })
                        : <PokeCard/>
                }
                </div>
            </div>
        </section>
    );
}