import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './App.css';
import Game from './pages/Game';
import Home from './pages/Home';
import Highscore from './pages/Highscore';
import Pokedex from './pages/Pokedex';



function App() {
    

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/memory">
                        <Game />
                    </Route>
                    <Route path="/pokedex">
                        <Pokedex />
                    </Route>
                    <Route path="/highscore">
                        <Highscore />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App