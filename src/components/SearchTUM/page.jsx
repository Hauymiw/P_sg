"use client";

import { useState, useEffect, useRef } from "react";
import addressData from './../data/provinces.json';
import './TUM.css'

export default function AddressSearch() {
    const [query, setQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1); // เก็บ index ของรายการที่เลือก
    const [warning, setWarning] = useState(""); // สถานะสำหรับการแจ้งเตือน
    const resultsRef = useRef(null);
    const itemsRef = useRef([]); // เก็บ ref ของแต่ละรายการ

    useEffect(() => {
        if (query.trim() === "") {
            setFilteredResults([]);
            setShowResults(false);
            return;
        }

        const results = addressData.flatMap((province) =>
            province.districts.flatMap((district) =>
                district.subdistricts
                    .filter((sub) =>
                        `${sub.name}${district.name}${province.name}${sub.zipcode}`
                            .toLowerCase()
                            .includes(query.toLowerCase())
                    )
                    .map((sub) => ({
                        province: province.name,
                        district: district.name,
                        subdistrict: sub.name,
                        zipcode: sub.zipcode,
                    }))
            )
        );

        setFilteredResults(results);
        setShowResults(results.length > 0);
        setSelectedIndex(-1); // รีเซ็ต index เมื่อมีผลลัพธ์ใหม่
    }, [query]);

    const handleSelect = (item) => {
        setQuery(`${item.subdistrict}, อำเภอ${item.district}, จังหวัด${item.province}, ${item.zipcode}`);
        setShowResults(false);
        setSelectedIndex(-1);
    };

    // ปิด dropdown ถ้าคลิกนอก input หรือ dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target)) {
                setShowResults(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // จับ event กดปุ่ม ArrowDown, ArrowUp, Enter
    const handleKeyDown = (event) => {
        if (showResults && filteredResults.length > 0) {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                setSelectedIndex((prev) => {
                    const newIndex = prev < filteredResults.length - 1 ? prev + 1 : 0;
                    scrollToSelected(newIndex);
                    return newIndex;
                });
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setSelectedIndex((prev) => {
                    const newIndex = prev > 0 ? prev - 1 : filteredResults.length - 1;
                    scrollToSelected(newIndex);
                    return newIndex;
                });
            } else if (event.key === "Enter" && selectedIndex >= 0) {
                event.preventDefault();
                handleSelect(filteredResults[selectedIndex]);
            }
        }
    };

    // เลื่อน Scroll ไปที่ตัวเลือกที่ถูกไฮไลต์
    const scrollToSelected = (index) => {
        if (itemsRef.current[index]) {
            itemsRef.current[index].scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    };

// ฟังก์ชันสำหรับการตรวจสอบภาษาอังกฤษและแสดงแจ้งเตือน
const handleInputChange = (e) => {
    const inputValue = e.target.value;
    
    const thaiRegex = /^[ก-๙0-9\s]*$/; // อนุญาตให้พิมพ์เฉพาะภาษาไทย, ตัวเลข, เว้นวรรค และ , . -
    const englishRegex = /[a-zA-Z,.]/; // เช็คว่ามีการพิมพ์ภาษาอังกฤษ

    // ถ้ามีภาษาอังกฤษให้แสดงข้อความเตือน
    if (englishRegex.test(inputValue)) {
        setWarning("กรุณาพิมพ์ภาษาไทยเท่านั้น");
    } else {
        setWarning(""); // ถ้าไม่พบภาษาอังกฤษก็ลบข้อความเตือน
    }

    if (thaiRegex.test(inputValue)) {
        setQuery(inputValue);
        setShowResults(true);
    }
};

    // ฟังก์ชันสำหรับลบข้อมูลใน input
    const clearInput = () => {
        setQuery(""); // ลบข้อมูลใน input
    };

    return (
        <div className="area_bk_pupup">
            <div className="areaTUM"ref={resultsRef}>
                <div className="input-container">
                    <input
                        type="text"
                        className="input_search_TUM"
                        placeholder="ค้นหา ตำบล/แขวง, อำเภอ/เขต, จังหวัด, รหัสไปรษณีย์"
                        value={query}
                        onChange={handleInputChange} // ใช้ฟังก์ชันที่ปรับปรุงแล้ว
                        onKeyDown={handleKeyDown} // เพิ่มการจับคีย์บอร์ด
                    />
                    {/* ไอคอนลบ */}
                        <img src="/Images/delete.png" 
                            alt="ลบ" 
                            className="clear-icon" 
                            onClick={clearInput} // ลบข้อมูลเมื่อคลิก
                        />
                </div>

                {warning && (   // กำหนด css แจ้งเตือน
                    <div style={{ 
                        color: "red", 
                        fontSize: "12px", 
                        marginTop: "10px", 
                        textAlign: "left", 
                        marginLeft: "45px" 
                        }}
                    >
                        {warning}
                    </div>
                )}

                {showResults && filteredResults.length > 0 && (
                    <ul className="showResults">
                        {filteredResults.map((item, idx) => (
                            <li
                                key={idx}
                                ref={(el) => (itemsRef.current[idx] = el)} // กำหนด ref ให้แต่ละไอเท็ม
                                className={`dropdown_li ${selectedIndex === idx ? "selected" : ""}`}
                                onClick={() => handleSelect(item)}
                            >
                                {`${item.subdistrict}, อำเภอ${item.district}, จังหวัด${item.province}, ${item.zipcode}`}
                            </li>
                        ))}
                    </ul>
                )}

            </div>
            <div className="area_bnt">
                <div className='bnt_sh'>
                    <button className='bnt_ok'>OK</button>
                    <button className='bnt_cel' onClick={() => setQuery("")}>Cancel</button>
                </div>
        </div>
        </div>
    );
}
