import * as React from 'react';
import Header from '../../components/Header';
import './style.css';
import { useState, useEffect } from "react";


function Highscore() {
 
    const [pseudo, setPseudo] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("pseudo");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

    useEffect(() => {
        localStorage.setItem("pseudo", JSON.stringify(pseudo));
    }, [pseudo]);

    return (
        <div className="Highscore">
            <Header/>
            <p>Highscore</p>
            <label>Choose your pseudo :</label><br/>
            <input type="text" value={pseudo} onChange={(e) => {setPseudo(e.target.value)}} placeholder="Pseudo" ></input>
        </div>
    );
}

export default Highscore