import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Game from './pages/Game';
import Home from './pages/Home';
import Highscore from './pages/Highscore';
import './App.css';

function App() {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/memory">
                        <Game />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/highscore">
                        <Highscore />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App