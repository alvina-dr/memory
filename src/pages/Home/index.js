import * as React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import './style.css';

function Home() {

    return (
        <div className="Home">
            <Header/>
            <p>Welcome to our website.</p>
            <Button link="/memory">
                Game       
            </Button>
            <p>yup</p>
        </div>
    );
}

export default Home