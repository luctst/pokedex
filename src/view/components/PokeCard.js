/**
 * Import, Variables
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const style = {
    "marginRight": "1%"
}

/**
 * Render the pokemon card with data on it.
 */
export const PokeCard = props => {
    const [state, setState] = useState({ pokemonData: null, dataFetched: false });
    console.log(state);

    useEffect(() => {
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
                .then(data => data.json())
                .then(dataParsed => setState({
                    pokemonData: dataParsed,
                    dataFetched: true
                }));
        } catch (error) {
            throw error;
        }
    }, []);

    const handlerType = (el, i) => {
        switch (el.type.name) {
            case "fire":
                return <span key={i} className="badge badge-pill badge-danger">{el.type.name}</span>;
                break;
            case "flying":
                return <span key={i} className="badge badge-pill badge-light">{el.type.name}</span>;
                break;
            case "electric":
                return <span key={i} className="badge badge-pill badge-warning">{el.type.name}</span>;
                break;
            case "water":
                return <span key={i} className="badge badge-pill badge-primary">{el.type.name}</span>;
                break;
            case "poison":
                return <span key={i} className="badge badge-pill badge-secondary">{el.type.name}</span>;
                break;
            case "psychic":
                return <span key={i} className="badge badge-pill badge-dark">{el.type.name}</span>;
                break;
            case "grass":
                return <span key={i} className="badge badge-pill badge-success">{el.type.name}</span>;
                break;
            case "dragon":
                return <span key={i} className="badge badge-pill badge-primary">{el.type.name}</span>;
                break;
            default:
                break;
        }
    };

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
                            <button onClick={props.history.goBack} className="btn btn-success">Home</button>
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