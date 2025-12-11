import { Link } from "react-router-dom";

function CoinCard({ coin }) {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="p-4 rounded-lg shadow hover:scale-105 transition cursor-pointer bg-gray-800 text-white">
                <img src={coin.image} alt={coin.name} className="w-12 h-12" />
                <h2 className="text-xl font-semibold">{coin.name}</h2>
                <p>${coin.current_price}</p>
            </div>
        </Link>
    );
}

export default CoinCard;
