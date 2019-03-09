/**
 * Import, Variables
 */
import React from "react";
import {PokeList} from "../components/PokeList";

/**
 * Searchbar to find a pokemon
 */
export const Search = () => {
    return (
        <>
            <section className="container mb-3">
                <div className="row">
                    <div className="col-12 searchbar">
                        <p className="small">Enter a Pokemon name</p>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
            </section>
            <PokeList/>
        </>
    );
}