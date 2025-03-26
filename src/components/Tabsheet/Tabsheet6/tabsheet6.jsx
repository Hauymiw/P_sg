"use client";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import React from 'react';
import SearchEID from "./../../searchEID/page"; // component สำหรับค้นหาพนักงาน

export default function TabSheet6() {
    const [trainingData, setTrainingData] = useState({
        date: "",
        topic: "",
        employeeId: "",
    });

    const [isPopupOpen, setIsPopupOpen] = useState(false); // สถานะการแสดง popup
    const [employeeData, setEmployeeData] = useState([]);
    const [users, setUsers] = useState([]);
    const [trainingList, setTrainingList] = useState([]);
    const [employeeList, setEmployeeList] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const handleEmployeeSearch = (e) => {
        const employeeId = e.target.value;
        setTrainingData({ ...trainingData, employeeId });

        const foundEmployee = users.find(user => user.employeeId === employeeId);
        if (foundEmployee) {
            setEmployeeData([foundEmployee]);
        } else {
            setEmployeeData([]);
        }
    };

    const EmployeeSave = () => {
        if (employeeData.length > 0) {
            setEmployeeList(prevList => [
                ...prevList,
                { employeeId: employeeData[0].employeeId, name: employeeData[0].name },
            ]);
            setEmployeeData([]);
        } else {
            alert("ไม่พบข้อมูลพนักงาน");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrainingData({ ...trainingData, [name]: value });
    };

    const handleSave = () => {
        if (!trainingData.date || !trainingData.topic || !trainingData.employeeId) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
        setTrainingList([...trainingList, { ...trainingData, status: "A" }]);
        setTrainingData({ date: "", topic: "", employeeId: "" });
    };

    const handleSelectEmployee = (employeeId) => {
        setSelectedEmployees((prev) =>
            prev.includes(employeeId)
                ? prev.filter((id) => id !== employeeId)
                : [...prev, employeeId]
        );
    };

    const handleDeleteSelected = () => {
        if (selectedEmployees.length === 0) {
            alert("กรุณาเลือกพนักงานที่ต้องการลบ");
            return;
        }
        setEmployeeList((prevList) =>
            prevList.filter((employee) => !selectedEmployees.includes(employee.employeeId))
        );
        setSelectedEmployees([]);
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen); // เปลี่ยนสถานะการแสดงของ SearchEID
    };

    const handleSaveEmployees = (selected) => {
        if (selected.length > 0) {
            setTrainingData(prev => ({ ...prev, employeeId: selected[0].employeeId }));
        }
        setEmployeeList(prevList => [...prevList, ...selected]);
    };

    return (
        <div className="p-1  ">
            <div className="flex flex-col gap-6">
                <div className="p-4 pl-20 space-y-4 ">

                    {/* วันที่ฝึกอบรม*/}
                    <div className="flex items-center gap-4 ">
                        <label htmlFor="date" className="font-semibold w-[150px] text-right">วันที่ฝึกอบรม</label>
                        <input
                            type="date"
                            name="date"
                            value={trainingData.date}
                            onChange={handleChange}
                            className="border border-[1px] border-[#869BAF] w-[200px] p-2 focus:outline-none focus:ring-2 focus:ring-green-700" />
                    </div>

                    {/* หัวข้อฝึกอบรม*/}
                    <div className="flex items-center gap-4">
                        <label htmlFor="topic" className="font-semibold w-[150px] text-right">หัวข้อฝึกอบรม</label>
                        <input
                            type="text"
                            name="topic"
                            value={trainingData.topic}
                            onChange={handleChange}
                            className="border border-[1px] border-[#869BAF] w-[580px] p-2 focus:outline-none focus:ring-2 focus:ring-green-700" />
                    </div>

                    <div className="flex gap-4 items-center">
                        {/* ค้นหารหัสพนักงาน */}
                        <div className="flex items-center gap-4">
                            <label htmlFor="employeeId" className="font-semibold w-[150px] text-right">ค้นหารหัสพนักงาน</label>
                            <input
                                type="text"
                                name="employeeId"
                                maxLength={5}
                                value={trainingData.employeeId}
                                onClick={togglePopup} // เปิด Popup เมื่อคลิก
                                onChange={handleEmployeeSearch}
                                className="w-[220px] border border-[1px] border-[#869BAF] w-[580px] p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                readOnly

                            />

                            <img src="/images/search.png" alt="policy" className="w-8 h-8 mb-2 ml-2 text-green-900" />
                        </div>

                        {/* ปุ่มบันทึก */}
                        <div className="flex gap-2 flex-grow">
                            <button onClick={EmployeeSave} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                                <FaCheck className="mr-2" /> บันทึกรายคน
                            </button>

                            <button onClick={handleSave} className="bg-[#008E00] text-white px-4 py-2 rounded flex items-center relative">
                                <FaCheck className="mr-2 absolute top-3 left-2 opacity-60" />
                                <FaCheck className="mr-2" /> บันทึกทั้งหมด
                            </button>
                        </div>
                    </div>

                    {/* แสดง Popup SearchEID */}
                    {isPopupOpen && <SearchEID onSave={handleSaveEmployees} onClose={togglePopup} />}


                    {/* ตารางข้อมูลพนักงาน */}
                    <div className="mt-4 overflow-x-auto grid grid-cols-[150px_580px_1fr] gap-4 ">
                        <div></div>
                        <table className="w-1/1 table-auto border-collapse ">
                            <thead className="bg-[#D9D9D9] text-left">
                                <tr>
                                    <th className="px-4 py-2 w-10"></th>
                                    <th className="px-4 py-2 text-left">EID</th>
                                    <th className="px-4 py-2 text-left">NAM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeList.length > 0 ? (
                                    employeeList.map((employee, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="px-4 py-2">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedEmployees.includes(employee.employeeId)}
                                                    onChange={() => handleSelectEmployee(employee.employeeId)}
                                                    className="w-[20px] h-[20px]"
                                                />
                                            </td>
                                            <td className="px-4 py-2">{employee.employeeId}</td>
                                            <td className="px-4 py-2">{employee.name}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="border px-4 py-2 text-center">ไม่มีข้อมูล</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* ถังขยะ */}
                        <div className="grid grid-cols-2 gap-1 ">

                            <img
                                src="/images/delete.png"
                                alt="policy"
                                onClick={handleDeleteSelected}
                                className="w-6 h-6 mb-2 ml-2 text-green-900 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ตารางแสดงรายการฝึกอบรม */}
            <div className="mt-8 ml-12  overflow-auto w-[70%]">
                <table className="w-3/4 ">
                    <thead>
                        <tr className="bg-[#D9D9D9] text-left text-[#008E00]">
                            <th className="px-4 py-2 w-10"></th>
                            <th className="p-2 ">วันที่ฝึกอบรม</th>
                            <th className="p-2 ">หัวข้อฝึกอบรม</th>
                            <th className="p-2 ">สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainingList && trainingList.length > 0 ? (
                            trainingList.map((training, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2 w-10">●</td>
                                    <td className="p-2  ">{training.date}</td>
                                    <td className="p-2 ">{training.topic}</td>
                                    <td className="p-2 ">{training.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="border p-2 text-center">ไม่มีข้อมูล</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
