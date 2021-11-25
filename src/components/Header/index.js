import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Header() {

    return (
        <nav>
            <h1>Pokemon Memory</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/memory">Memory</Link>
                    <Link to="/highscore">Highscore</Link>
                    <Link to="/pokedex">Pokedex</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header