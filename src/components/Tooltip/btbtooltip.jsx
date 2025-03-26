// src/components/TooltipButton.js
import React, { useState } from "react";
import Tooltip from './tooltip'

function TooltipButton({ text, position = "top" }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative group py-2 pt-2">
            <button
                type="button"
                className="text-black hover:bg-gray-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-4 h-4 flex items-center justify-center border border-gray-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                ?
            </button>

            {/* Tooltip Box */}
            {isHovered && <Tooltip text={text} position={position} />}
        </div>
    );
}

export default TooltipButton;
