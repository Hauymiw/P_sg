import React, { useState } from "react";

const BranchDropdown = () => {
    const [Branch, setBranch] = useState(""); // ตั้งค่าเริ่มต้นเป็น ""

    const handleBranchChange = (event) => {
        setBranch(event.target.value);
    };

    return (
        <select style={{
            border: '1px solid #869BAF',
            borderRadius: '5px',
            color: 'black',
            fontSize: '14px',
            padding: '6px 10px',
            width: '100%',


        }}
            id="Branch"
            name="Branch"
            className=""
            value={Branch}
            onChange={handleBranchChange}

        >
            <option value="" disabled>-- กรุณาเลือกสาขา --</option>
            <option value="0">0: จตุโชติ </option>
            <option value="1">1: เทพารักษ์</option>
            <option value="2">2: นครปฐม</option>
            <option value="3">3: อยุธยา </option>
            <option value="4">4: สระบุร</option>
            <option value="5">5: ฉะเชิงเทรา</option>
            <option value="6">6: อมตะนคร</option>
        </select>
    );
};

export default BranchDropdown;
