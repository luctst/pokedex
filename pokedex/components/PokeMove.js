/**
 * Import, variables
 */
import React, {useEffect, useState} from "react";

/**
 * Render the moves from a specific Pokemon
 */
const PokeMove = props => {
    const [state, setState] = useState({ pokemonData: null, dataFetched: false });

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

    if (!state.dataFetched) return <h1>We're fetching data</h1>
    return (
        <>
            <header className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">{state.pokemonData.name} Moves.</h1>
                    </div>
                </div>
            </header>
            <section className="container">
                <div className="row">
                    <div className="col-12 mt-3 mb-3 pokeMove">
                    {
                        state.pokemonData.moves.map((el, i) => {
                            return <span 
                                        key={i} 
                                        className="badge badge-pill badge-success">{el.move.name}
                                    </span>
                        })
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button onClick={props.history.goBack} className="btn btn-primary">Back</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PokeMove;