/**
 * Import, Variables
 */
import React from 'react';
export const Context = React.createContext();

/**
 * Défine the GlobalStore used by our app components with React.createContext().
 */
export class GlobalStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    };
};