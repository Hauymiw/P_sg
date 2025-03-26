"use client";
import { useState } from "react";
import Header from "../../components/Header/Header";
import React from 'react';
import './formGetEid.css';
import TooltipButton from '../../components/Tooltip/btbtooltip';
import PrefixDropdown from '../../components/PrefixDropdown/PrefixDropdown';
import BrachDropdown from '../../components/BrachDropdown/BrachDropdown';


const formGetEid = () => {
    const tooltipPrefix =  'น = นาย\nนส = นางสาว\nง = นาง'  ;
    const tooltipName = 'ใส่ชื่อโดยไม่ต้องมีคำว่า “คุณ” นำหน้า' ;
    const tooltip3 = 'สถานะ :\nA = พนักงาน\nQ = ลาออก\nR = เชิญออก\nO = อื่นๆ \nP = มดเอส' ;

    const tooltip4 = '0 = หยุดทุกเสาร์\n4 = ทำทุกเสาร์' ;

    const tooltip5 = '0 = ไม่มี\n1 = มี' ;

    const tooltip6 = 'เวลาเข้า:\n08:30 \n09:00\n10:30' ;
    const [endDate, setEndDate] = useState("");



    return (
        <div className='Container'>
            <header className='headerContainer'>
                <Header HeaderText={"บันทึกเพิ่ม / แก้ไขข้อมูลพนักงานโดย "} />
            </header>
            <form action="" className='pageContainer'>
                {/* ใช้ Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2  ">
                    {/* กล่องสำหรับรหัสพนักงาน และ คำนำหน้าชื่อ */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className='inputlabel'>
                            <label htmlFor="employeeCode" className="block">รหัสพนักงาน</label>
                            <input
                                type="text"
                                id="employeeCode"
                                className="p-2 border rounded-lg w-full"
                            />
                        </div>

                        <div className='inputlabel'>
                            <div className="text-right flex  gap-2">
                                <label htmlFor="title" className="block">
                                    คำนำหน้าชื่อ
                                </label>
                                <TooltipButton
                                    text={tooltipPrefix}
                                    position="left" />
                            </div>
                            <PrefixDropdown />
                        </div>
                    </div>
                    <div></div>


                    <div className='inputlabel'  >
                        <div className="text-right flex items-center justify-start gap-2">
                            <label htmlFor="firstName" className="block">ชื่อ</label>
                            <TooltipButton text={tooltipName} position="left" />
                        </div>
                        <input
                            type="text"
                            id="firstName"
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>

                    {/* กล่องสำหรับนามสกุล */}
                    <div className='inputlabel'>
                        <label htmlFor="lastName" className="block">นามสกุล</label>
                        <input
                            type="text"
                            id="lastName"
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>

                    {/* กล่องสำหรับ PASS GROUP */}
                    <div className='inputlabel'>
                        <div className="text-right flex items-center justify-start gap-2">
                            <label htmlFor="passGroup" className="block">PASS GROUP CR^,BI^,AC^,KE^,PE^,AD^,MD^,CL^,OC^</label>

                        </div>
                        <input
                            type="text"
                            id="passGroup"
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>

                    {/* กล่องสำหรับแผนก */}
                    <div className='inputlabel'>
                        <label htmlFor="department" className="block">แผนก</label>
                        <select style={{
                            border: '1px solid #869BAF',
                            borderRadius: '5px',
                            color: 'black',
                            fontSize: '14px',
                            padding: '6px 10px',
                            width: '100%',
                        }}
                        >
                            <option value="" disabled>-- กรุณาเลือกแผนก --</option>
                            <option value="1">option1</option>
                            <option value="2">option2</option>
                            <option value="3">option3</option>
                            <option value="4">option4</option>
                            <option value="5">option5</option>

                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2  ">
                        <div className='inputlabel'>
                            <div className="text-right flex items-center justify-start gap-2">
                                <label htmlFor="status" className="block">สถานะ

                                </label>
                                <TooltipButton text={tooltip3} position="left" />
                            </div>
                            <input
                                type="text"
                                id="status"
                                className="p-2 border rounded-lg w-full"
                            />
                        </div>

                        {/* กล่องสำหรับเวลาเข้างาน */}
                        <div className='inputlabel'>
                            <div className="text-right flex items-center justify-start gap-2">
                                <label htmlFor="workTime" className="block">เวลาเข้างาน</label>
                                <TooltipButton text={tooltip6} position="left" />
                            </div>
                            <input
                                type="text"
                                id="workTime"
                                className="p-2 border rounded-lg w-full"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2  ">
                        <div className='inputlabel'  >
                            <div className="text-right flex items-center justify-start gap-2">
                                <label htmlFor="overtime" className="block">ล่วงเวลา</label>
                                <TooltipButton
                                    text={tooltip5}
                                    position="left" />
                            </div>
                            <div className='radiobox' >
                                <div className="flex">
                                    <input type="radio" name="overtime" id="overtime1" />
                                    <label htmlFor="">0</label>
                                </div>
                                <div className="flex">
                                    <input type="radio" name="overtime" id="overtime2" />
                                    <label htmlFor="">1</label>
                                </div>
                            </div>
                        </div>


                        <div className='inputlabel'>
                            <div className="text-right flex items-center justify-start gap-2">
                                <label htmlFor="shiftOff" className="block">เวรหยุด</label>
                                <TooltipButton
                                    text={tooltip4}
                                    position="left" />
                            </div>

                            <select style={{
                                border: '1px solid #869BAF',
                                borderRadius: '5px',
                                color: 'black',
                                fontSize: '14px',
                                padding: '6px 10px',
                                width: '100%',

                            }}
                            >
                                <option value="" disabled>-- กรุณาเลือกเวรหยุด --</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    <div className='inputlabel'>
                        <label htmlFor="branch" className="block">ประจำสาขา</label>
                        <BrachDropdown />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2  ">
                        <div className='inputlabel'>
                            <label htmlFor="startDate" className="block">วันที่เริ่มงาน</label>
                            <input
                                id="startDate"
                                type="date"
                                className="p-2 border rounded-lg w-full"
                            />
                        </div>

                        {/* กล่องสำหรับวันที่สิ้นสุดการทำงาน */}

                        <div className='inputlabel'>
                            <label htmlFor="endDate" className="block">วันที่สิ้นสุดการทำงาน</label>
                            <div className="flex">
                                <input
                                    id="endDate"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="p-2 border rounded-lg w-full"
                                    placeholder="Select date"
                                />
                                <button className="ml-2" onClick={() => setEndDate("")}
                                    type="button" >
                                    <img
                                        src="/images/delete.png" 
                                        alt="Delete"
                                        className="w-6 h-6 cursor-pointer item-center"
                                    />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="flex m-[10px] ">
                        <input
                            type="checkbox"
                            id="add-work-time"  // เพิ่ม id เพื่อเชื่อมโยงกับ label
                            style={{
                                width: '20px',
                                height: '20px',
                                paddingLeft: '10px',
                                accentColor: '#008E00',
                                border: '1px solid #869BAF  '
                            }}
                        />
                        <label htmlFor="work-time" className="px-5     ">เพิ่มข้อมูลลงเวลาทำงาน</label>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default formGetEid;
