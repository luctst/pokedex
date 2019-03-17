/**
 * Import, Variables
 */
import React from "react";
import {Link} from "react-router-dom";
const style = {
    "flex": "0 0 20%",
    "margin": "1%"
}

/**
 * Render the list of pokemon when page is loaded
 */
export const PokeList = props => {
    !props.dataFetched ? <p>We're fetching the data.</p> :null
    return (
        <section className="container">
            <div className="row">
                <div className="col-12 pokeList">
                {
                    props.showList.show ?
                        props.pokemonData.map((el, i) => {
                            return (
                                <div className="card" key={i}>
                                    <h5 className="card-header">{i + 1}</h5>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}/>
                                    <div className="card-body">
                                        <Link to={`/pokemon/${el.name}`} className="card-title">{el.name}</Link>
                                    </div>
                                </div>
                            );
                        })
                    : <ul className="list-group flex-wrap justify-content-center flex-row">
                    {
                        props.pokemonData.map((el, i) => {
                            return el.name.startsWith(props.showList.pokemonTarget) ?
                                <li className="list-group-item" key={i} style={style}>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}/>
                                    <Link to={`/pokemon/${el.name}`}>{el.name}</Link>
                                </li>
                            :null
                        })
                    }
                    </ul> 
                }
                </div>
            </div>
        </section>
    );
}