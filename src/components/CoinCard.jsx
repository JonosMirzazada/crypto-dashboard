import React from "react";
import TrendBadge from "./TrendBadge";
import PriceTag from "./PriceTag";

function CoinCard({ coin }) {
    return (
        <div className="bg-gray-800 p-5 rounded-xl shadow hover:scale-[1.02] transition flex flex-col gap-3">

            {/* Top: Icon + Name */}
            <div className="flex items-center gap-3">
                <img src={coin.image} width={40} alt={coin.name} className="rounded-full" />
                <div>
                    <h2 className="font-bold text-white">{coin.name}</h2>
                    <p className="text-gray-400 text-sm uppercase">{coin.symbol}</p>
                </div>
            </div>

            {/* Price */}
            <PriceTag price={coin.current_price} />

            {/* 24h Change */}
            <TrendBadge change={coin.price_change_percentage_24h} />

        </div>
    );
}

export default CoinCard;
