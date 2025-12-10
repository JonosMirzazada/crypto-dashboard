import React from "react";

function TrendBadge({ change }) {
    const positive = change >= 0;

    return (
        <span
            className={`px-3 py-1 rounded-lg text-sm font-medium ${positive
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
        >
            {positive ? "📈" : "📉"} {change.toFixed(2)}%
        </span>
    );
}

export default TrendBadge;
