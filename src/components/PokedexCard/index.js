import './style.css';

function PokedexCard({ card, possessed }) {
    
    return (
        <div className="card">
            <img className="pokedexCard" src={card.src} alt="Pokedex Card" />
        </div>
)}

export default PokedexCard