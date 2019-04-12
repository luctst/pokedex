/**
 * Import, Variables
 */
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import {PokeList} from "../components/PokeList";
import { getData } from "../actions/helper";
const initialState = {
    pokemonData: [],
    dataFetched: false
};

/**
 * Searchbar to find a pokemon
 */
const Home = () => {
    const [pokeList, setPokeList] = useState(initialState);
    const [list, setShowList] = useState({show: true});

    useEffect(() => {
        const getPokemonData = async () => {
            const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=807");
            const newState = {
                pokemonData: data.results,
                dataFetched: true,
            }
            setPokeList(newState);
        }
        getPokemonData();
    }, []);

    const inputHandler = async e => {
        if (e.target.value !== "") {
            const newState = {show:false, pokemonTarget:e.target.value};
            setShowList(newState);
        } else {
            setShowList({show:true});
        }
    }

    return (
        <>
            <Header/>
            <section className="container mb-3">
                <div className="row">
                    <div className="col-12 searchbar">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter a pokemon name" 
                            onChange={inputHandler}
                        />
                    </div>
                </div>
            </section>
            <PokeList 
                dataFetched={pokeList.dataFetched} 
                pokemonData={pokeList.pokemonData}
                showList={list}
            />
        </>
    );
}

export default Home;