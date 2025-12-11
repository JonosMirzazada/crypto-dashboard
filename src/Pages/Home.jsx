import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CoinCard from "../components/CoinCard";
import CoinRow from "../components/CoinRow";
import "../index.css";

function Home() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [view, setView] = useState("grid");
    const [sort, setSort] = useState("rank");

    const filteredCoins = coins
        .filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === "rank") return a.market_cap_rank - b.market_cap_rank;
            if (sort === "price") return b.current_price - a.current_price;
            if (sort === "market_cap") return b.market_cap - a.market_cap;
            return 0;
        });

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then((res) => res.json())
            .then((data) => {
                setCoins(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
                <p className="text-white mt-2">Laddar kryptovalutor...</p>
            </div>
        );
    }

    return (
        <div className="app-container">

            <Header
                search={search}
                setSearch={setSearch}
                view={view}
                setView={setView}
                sort={sort}
                setSort={setSort}
            />

            <div className={`coins-grid ${view}`}>
                {filteredCoins.map((coin) =>
                    view === "grid" ? (
                        <CoinCard key={coin.id} coin={coin} />
                    ) : (
                        <CoinRow key={coin.id} coin={coin} />
                    )
                )}
            </div>

        </div>
    );
}

export default Home;
