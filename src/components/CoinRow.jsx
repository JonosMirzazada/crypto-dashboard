import React from "react";
import TrendBadge from "./TrendBadge";
import PriceTag from "./PriceTag";

function CoinRow({ coin }) {
    return (
        <div className="bg-gray-800 px-4 py-3 rounded-xl shadow flex items-center justify-between hover:bg-gray-700 transition">

            {/* Left: Icon + Name */}
            <div className="flex items-center gap-3">
                <img src={coin.image} width={34} alt={coin.name} className="rounded-full" />
                <div>
                    <h2 className="font-semibold text-white">{coin.name}</h2>
                    <p className="text-gray-400 text-sm uppercase">{coin.symbol}</p>
                </div>
            </div>

            {/* Middle: Price */}
            <PriceTag price={coin.current_price} />

            {/* Right: Trend */}
            <TrendBadge change={coin.price_change_percentage_24h} />
        </div>
    );
}

export default CoinRow;
