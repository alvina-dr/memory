import './style.css';

function PokedexCard({ card, possessed }) {
    
    return (
        <div className="card">
            <img className="pokedexCard" src={card.src} alt="Pokedex Card Image" />
        </div>
)}

export default PokedexCard