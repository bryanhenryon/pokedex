import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import Pokedex from './Pokedex';
import PokemonPage from './pages/PokemonPage';


function App() {
    return (
        <Router>
            <div className="container">
                <Link to="/" className="text-center">
                    <h1>
                        <img
                            className="w-50"
                            src={`/images-pokemon/pokedex.png`}
                            alt="pokedex"
                        />
                    </h1>
                </Link>
                <Switch>
                    <Route exact path="/" component={Pokedex} />
                    <Route exact path="/:id" component={PokemonPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;