/**
 * Import, Variables
 */
import React, {useState, useEffect, useContext} from "react";
import {PokeList} from "./PokeList";
import { getData } from "../../actions/helper";
import {Context} from "../../store/GlobalStore";

/**
 * Searchbar to find a pokemon
 */
export const Search = () => {
    const context = useContext(Context);
    const [pokeList, setPokeList] = useState({
        pokemonData: null,
        dataFetched: false,
    });
    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        const getPokemonData = async () => {
            const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=150");
            setPokeList({
                pokemonData: data.results,
                dataFetched: true,
            });
        }
        getPokemonData();
    }, []);

    const inputHandler = e => {
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
            context.dataFetched = true;
        }
    };

    return (
        <>
            <section className="container mb-3">
                <div className="row">
                    <div className="col-12 searchbar">
                        <input type="text" className="form-control" placeholder="Enter a pokemon name" onBlur={inputHandler}/>
                        <button className="btn btn-success" onClick={btnHandler}>Search</button>
                    </div>
                </div>
            </section>
            <PokeList 
                dataFetched={pokeList.dataFetched} 
                pokemonData={pokeList.pokemonData}/>
        </>
    );
}