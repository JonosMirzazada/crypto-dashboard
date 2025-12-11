import { Link } from "react-router-dom";

function CoinRow({ coin }) {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="grid grid-cols-4 p-4 border-b cursor-pointer hover:bg-gray-700 text-white">
                <span>{coin.market_cap_rank}</span>
                <span className="flex items-center gap-2">
                    <img src={coin.image} className="w-6 h-6" />
                    {coin.name}
                </span>
                <span>${coin.current_price}</span>
                <span>{coin.market_cap.toLocaleString()}</span>
            </div>
        </Link>
    );
}

export default CoinRow;
