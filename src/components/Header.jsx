import React from "react";

function Header({ search, setSearch, view, setView, sort, setSort }) {
    return (
        <header className="w-full bg-gray-800/60 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-700">
            {/* Top */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        🚀 Crypto Tracker
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Real-time cryptocurrency prices and market data
                    </p>
                </div>

                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search cryptocurrencies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-72 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                />
            </div>

            {/* Bottom controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">

                {/* Sorting */}
                <div className="flex items-center gap-3 text-gray-300">
                    <label className="text-sm">Sort by:</label>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="bg-gray-900 border border-gray-700 px-3 py-1 rounded-lg focus:outline-none focus:border-green-500 text-white"
                    >
                        <option value="rank">Rank</option>
                        <option value="price">Price</option>
                        <option value="market_cap">Market Cap</option>
                    </select>
                </div>

                // {/* Grid/List toggle */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setView("grid")}
                        className={`px-4 py-2 rounded-lg transition ${view === "grid"
                                ? "bg-green-500 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                    >
                        Grid
                    </button>
                    <button
                        onClick={() => setView("list")}
                        className={`px-4 py-2 rounded-lg transition ${view === "list"
                                ? "bg-green-500 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                    >
                        List
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
