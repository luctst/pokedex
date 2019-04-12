/**
 * Import, Variables
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getData} from "../actions/helper";
const style = {
    "marginRight": "1%"
}

/**
 * Render the pokemon card with data on it.
 */
const PokeCard = props => {
    const [state, setState] = useState({ pokemonData: null, dataFetched: false });
    const [location, setLocation] = useState({locationData: {}, locationFetched: false});
    
    useEffect(() => {
        const fetchAllPokemonData = async () => {
            const data = await getData(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`);
            setState({pokemonData:data, dataFetched:true});
            fetchPokemonLocation(`https://pokeapi.co/api/v2/location/${data.id}`);
        };
        
        const fetchPokemonLocation = async bdd => {
            const data = await getData(bdd);
            setLocation({locationData: data, locationFetched:true});
        }

        fetchAllPokemonData();
    }, []);

    const handlerType = (el, i) => {
        switch (el.type.name) {
            case "fire":
                return <span key={i} className="badge badge-pill badge-danger">{el.type.name}</span>;
            case "flying":
                return <span key={i} className="badge badge-pill badge-light">{el.type.name}</span>;
            case "electric":
                return <span key={i} className="badge badge-pill badge-warning">{el.type.name}</span>;
            case "water":
                return <span key={i} className="badge badge-pill badge-primary">{el.type.name}</span>;
            case "poison":
                return <span key={i} className="badge badge-pill badge-secondary">{el.type.name}</span>;
            case "psychic":
                return <span key={i} className="badge badge-pill badge-dark">{el.type.name}</span>;
            case "grass":
                return <span key={i} className="badge badge-pill badge-success">{el.type.name}</span>;
            case "dragon":
                return <span key={i} className="badge badge-pill badge-primary">{el.type.name}</span>;
            default:
        }
    };

    const handlerFav = () => {
        const addInSession = { name: state.pokemonData.name, imgPokemon: state.pokemonData.sprites.front_default};
        console.log(window.sessionStorage);
        window.sessionStorage.setItem
    }

    return (
        <section className="container">
            <div className="row">
                {
                    !state.dataFetched ?
                        <div className="col-12 d-flex justify-content-center">We're fetching data.</div>
                    : <div className="col-12 pokeCard">
                        <div className="pokeCard--left">
                            <h2>Name: {state.pokemonData.name}</h2>
                            <p>Game id: <strong>{state.pokemonData.id}</strong></p>
                            <p>Type: {
                                state.pokemonData.types.map((el, i) => {
                                    return handlerType(el, i);
                                })
                            }</p>
                            <p>Height: <strong>{state.pokemonData.height / 10} m</strong>.</p>
                            <p>Weight: <strong>{state.pokemonData.weight / 10} Kg</strong>.</p>
                            <p>Attack: 
                                <strong style={style}>{state.pokemonData.moves.length}</strong>
                                <Link to={`/moves/${state.pokemonData.name}`}>See more</Link>
                            </p>
                            <p>If you defeat this pokemon you will win <strong>{state.pokemonData.base_experience} exp</strong>.</p>
                            <p>Occurs in:</p>
                            <div className="pokeCard--left--version mb-3">
                                {
                                    state.pokemonData.game_indices.map((el, i) => {
                                        return <span key={i} className="badge badge-info">{el.version.name}</span>
                                    })
                                }
                            </div>
                            <div className="pokeCard--left--version mb-3">
                                {
                                    !location.locationFetched ?
                                        <p className="small">Loading location..</p>
                                    :<>
                                        <p>Location: <span className="badge badge-info">{location.locationData.name}</span>
                                        </p>
                                        <p>Région: <strong>{location.locationData.region.name}</strong>.</p>
                                    </>
                                }
                            </div>
                            <div className="pokeCard--left--stat mb-3">
                                <p>Statistiques</p>
                                <ul className="list-group">
                                {
                                    state.pokemonData.stats.map((el, i) => {
                                        return <li key={i} className="list-group-item">{el.stat.name}: <strong>{el.base_stat}</strong></li>
                                    })
                                }
                                </ul>
                            </div>
                            <button onClick={props.history.goBack} className="btn btn-success mb-3">Home</button>
                            <button onClick={handlerFav} className="btn btn-primary">Add this pokemon to favorite.</button>
                        </div>
                        <div className="pokeCard--right">
                            <img
                                src={state.pokemonData.sprites.front_default}
                                alt={`Picture of ${state.pokemonData.name}`}
                            />
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default PokeCard;