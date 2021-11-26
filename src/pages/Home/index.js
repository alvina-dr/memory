import * as React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import './style.css';

function Home() {

    return (
        <div className="Home">
            <Header/>
            <p>Welcome to our website.</p>
            <p>We are Cyril BAS and Alvina DAMASIO--RAZAFIARIZAKA.</p> 
            <p><br/>Here you can play a pokemon memory game.</p>
            <Button link="/memory">
                Pokemon Memory       
            </Button>
            <p>We hope you enjoy it.</p>
            <p>To go and have a look at the scoreboard :</p>
            <Button link="/highscore">
                Highscore       
            </Button>
            <p>And here you can go and see all the pokemons you collected.</p>
            <Button link="/pokedex">
                Pokedex       
            </Button>
            <p>Enjoy ! :D</p>
        </div>
    );
}

export default Home