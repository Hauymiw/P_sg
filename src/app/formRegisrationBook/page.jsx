"use client";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import React from 'react';
import './formRegisrationBook.css';
import TooltipButton from '../../components/Tooltip/btbtooltip';
import BrachDropdown from '../../components/BrachDropdown/BrachDropdown';

const formRegisrationBook = () => {

    const tooltipName = 'ใส่ชื่อโดยไม่ต้องมีคำว่า “คุณ” นำหน้า';
    const tooltip3 = 'สถานะ :\nA = พนักงาน\nQ = ลาออก\nR = เชิญออก\nO = อื่นๆ \nP = มดเอส';
    const tooltip4 = '0 = หยุดทุกเสาร์\n4 = ทำทุกเสาร์';
    const tooltip5 = '0 = ไม่มี\n1 = มี';
    const tooltip6 = 'เวลาเข้า:\n08:30 \n09:00\n10:30';
    const [endDate, setEndDate] = useState("");
    const [today, setToday] = useState("");

    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0]; // ได้ค่า YYYY-MM-DD
        setToday(currentDate);
    }, []);

    return (
        <div className='Container'>
            <header className='headerContainer'>
                <Header HeaderText={"บันทึกเพิ่ม / แก้ไขข้อมูลพนักงานโดย "} />
            </header>
            <form action="" className='pageContainer'>
                {/* ใช้ Grid Layout */}
                <div className="grid grid-cols-2">
                    {/* รหัสพนักงาน และ คำนำหน้าชื่อ */}
                    <div className='inputlabel'>
                        <label htmlFor="employeeCode" className="block">รหัสพนักงาน</label>
                        <input
                            type="text"
                            id="employeeCode"
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>

                    <div className='inputlabel'>
                        <label htmlFor="title" className="block">
                            วันที่รับเล่มทะเบียน
                        </label>
                        <input
                            type="date"
                            value={today}
                            readOnly
                            className="p-2 border rounded-lg w-full text-[#0043F1] border-[#869BAF]"
                        />
                    </div>


                    <div className='inputlabel'>
                        <div className="text-right flex items-center justify-start gap-2">
                            <label htmlFor="firstName" className="block">ทะเบียนรถ</label>
                        </div>
                        <input
                            type="text"
                            id="firstName"
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>

                    <div className="inputlabel">
                        <label htmlFor="bookImage" className="block">รูปภาพเล่มทะเบียน</label>
                        <input
                            type="file"
                            id="bookImage"
                            accept="image/*"
                            capture="environment"
                            className="p-2 border border-[#869BAF] rounded-lg w-full"
                        />
                    </div>
                </div>
                {/* ปุ่มบันทึกข้อมูล */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-[#0043F1] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0032B8] transition duration-300 w-full sm:w-auto"
                    >
                        บันทึกข้อมูล
                    </button>
                </div>
            </form>
        </div>
    );
};

export default formRegisrationBook;
