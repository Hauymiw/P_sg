import React, { useState } from "react";
import './PrefixDropdown.css';

const PrefixDropdown = () => {
    const [prefix, setPrefix] = useState(""); // ตั้งค่าเริ่มต้นเป็น ""

    const handlePrefixChange = (event) => {
        setPrefix(event.target.value);
    };

    return (
        <select   
            id="prefix"
            name="prefix"
            className=""
            value={prefix}
            onChange={handlePrefixChange}
        >
            <option value="" disabled>-- กรุณาเลือกคำนำหน้า --</option>
            <option value="น">น</option>
            <option value="นส">นส</option>
            <option value="ง">ง</option>
        </select>
    );
};

export default PrefixDropdown;
