import React, { useState, useRef, useEffect } from "react";
import './tooltip.css';

function Tooltip({ text, position = "top" }) {
    const tooltipRef = useRef(null);
    const [tooltipPositionClass, setTooltipPositionClass] = useState("top-full left-1/2 -translate-x-1/2 mb-2");

    // Update position class based on prop 'position'
    useEffect(() => {
        let newPositionClass = "top-full left-1/2 -translate-x-1/2 mb-2";

        if (position === "left") {
            newPositionClass = "left-full top-1/2 -translate-y-1/2 ml-2";
        } else if (position === "right") {
            newPositionClass = "right-full top-1/2 -translate-y-1/2 mr-2";
        } else if (position === "bottom") {
            newPositionClass = "bottom-full left-1/2 -translate-x-1/2 mt-2";
        } else if (position === "top") {
            newPositionClass = "top-full left-1/2 -translate-x-1/2 mb-2";
        }

        setTooltipPositionClass(newPositionClass);
    }, [position]);


    return (
        <div className={`tooltip ${tooltipPositionClass}`}>
            {text}
        </div>
    );
}

export default Tooltip;
