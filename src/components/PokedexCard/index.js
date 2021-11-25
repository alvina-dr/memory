import './style.css';

function PokedexCard({ card, possessed }) {
    
    return (
        <div className="card">
            <img className="pokedexCard" src={card.src} />
        </div>
)}

export default PokedexCard