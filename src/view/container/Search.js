/**
 * Import, Variables
 */
import React, {useState, useEffect} from "react";
import {PokeList} from "./PokeList";
import { getData } from "../../actions/helper";
import { PokeCard } from "../components/PokeCard";
const initialState = {
    pokemonData: null,
    dataFetched: false
};

/**
 * Searchbar to find a pokemon
 */
export const Search = () => {
    const [pokeList, setPokeList] = useState(initialState);
    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        const getPokemonData = async () => {
            const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=150");
            const newState = {
                pokemonData: data.results,
                dataFetched: true
            }
            setPokeList(newState);
        }
        getPokemonData();
    }, []);

    const inputHandler = async e => {
        if (e.target.value !== "") {
            setInputValue(e.target.value);
        }
    }

    const btnHandler = async () => {
        if (inputValue !== "") {
            const data = await getData(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
            setPokeList({
                pokemonData: data,
                dataFetched: true
            });
            context.pokemonData = data;
        }
    };

    return (
        <>
            <section className="container mb-3">
                <div className="row">
                    <div className="col-12 searchbar">
                        <input type="text" className="form-control" placeholder="Enter a pokemon name" onChange={inputHandler}/>
                        <button className="btn btn-success" onClick={btnHandler}>Search</button>
                    </div>
                </div>
            </section>
            {
                Array.isArray(pokeList.pokemonData) ?
                    <PokeList
                        dataFetched={pokeList.dataFetched}
                        pokemonData={pokeList.pokemonData}/>
                : <PokeCard/>
            }
        </>
    );
}