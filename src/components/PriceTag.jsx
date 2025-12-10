import React from "react";

function PriceTag({ price }) {
    return (
        <div className="text-xl font-bold text-white">
            ${price.toLocaleString()}
        </div>
    );
}

export default PriceTag;
