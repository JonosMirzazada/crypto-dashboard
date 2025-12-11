import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function CoinDetails() {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const coinRes = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
                const coinData = await coinRes.json();

                const chartRes = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
                );
                const chartJson = await chartRes.json();

                setCoin(coinData);

                setChartData({
                    labels: chartJson.prices.map((p) => new Date(p[0]).toLocaleDateString()),
                    datasets: [
                        {
                            label: `${coinData.name} Price (last 7 days)`,
                            data: chartJson.prices.map((p) => p[1]),
                            borderColor: "rgba(75, 192, 192, 1)",
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            tension: 0.25,
                        },
                    ],
                });
            } catch (err) {
                console.error("Error loading coin details", err);
            } finally {
                setLoading(false); 
            }
        }

        fetchData();
    }, [id]);

    if (loading || !coin) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                <div className="spinner"></div>
                <p className="mt-4">Loading coin data...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            {/* Back button */}
            <Link
                to="/"
                className="inline-block mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
                ⬅ Back
            </Link>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <img src={coin.image.large} width="60" alt={coin.name} />
                <div>
                    <h1 className="text-3xl font-bold">{coin.name}</h1>
                    <p className="text-gray-400 uppercase">{coin.symbol}</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-gray-400">Current Price</h3>
                    <p className="text-2xl">${coin.market_data.current_price.usd}</p>
                </div>

                <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-gray-400">Market Cap</h3>
                    <p className="text-2xl">${coin.market_data.market_cap.usd.toLocaleString()}</p>
                </div>

                <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-gray-400">24h Change</h3>
                    <p
                        className={`text-2xl ${coin.market_data.price_change_percentage_24h >= 0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                    >
                        {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                    </p>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-gray-800 p-4 rounded shadow">
                <h2 className="text-xl mb-4">7 Day Price Chart</h2>
                {chartData && <Line data={chartData} />}
            </div>
        </div>
    );
}

export default CoinDetails;
