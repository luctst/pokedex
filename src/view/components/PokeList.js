/**
 * Import, Variables
 */
import React, {useState, useEffect} from "react";
import {getData} from "../../actions/helper";

/**
 * Render the list of pokemon when page is loaded
 */
export const PokeList = () => {
    const [pokeList, setPokeList] = useState({
        pokemonData: [],
        dataFetched: false,
    });

    useEffect(() => {
        const getPokemonData = async () => {
            const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=150");
            if (!pokeList.dataFetched) {
                setPokeList({
                    pokemonData: data.results,
                    dataFetched: true
                });
            }
        }
        getPokemonData();
    });

    return (
        <section className="container pokeList">
            <div className="row">
                <div className="col-12">
                {
                    pokeList.dataFetched ? 
                        <p>Data fetched !!</p>
                    :<p>We're fetching data</p>
                }
                </div>
            </div>
        </section>
    );
}