"use client";

import { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
import { FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import './tabsheet7.css';

export default function TabSheet7() {
  const [date, setDate] = useState(null);
  const [detail, setDetail] = useState("");
  const [benefitsList, setBenefitsList] = useState([
    { date: "02/07/2019", detail: "พนง.เช่าซื้อรถจักรยานยนต์ HONDA WAVE ทะเบียน 9กก 9259กท", status: "B" },
    { date: "12/05/2020", detail: "พนง.ซื้อรถจักรยานยนต์ HONDA WAVE ทะเบียน 1กก 4561กท", status: "B" },
  ]);

  const handleSave = () => {
    if (date && detail) {

       // ตรวจสอบว่า date เป็น instance ของ Date และไม่ใช่ค่า NaN
      const formattedDate = date instanceof Date && !isNaN(date)
      ? date.toLocaleDateString("en-GB")
      : "";  // หากไม่ใช่จะได้ค่าเป็นสตริงว่าง
      const newBenefit = { date: formattedDate, detail, status: "B" };
      setBenefitsList([...benefitsList, newBenefit]);
      setDate(null);
      setDetail("");
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };

  return (
    <div className="p-25 p-[20px] ">
      <div className="flex flex-col  ml-auto max-w-3/4">
        <div className="flex flex-col    ">
          <div className="flex items-center gap-4">
            <label className="font-semibold w-[200px] text-right">วันที่ฝึกอบรม</label>
            <input
              type="date"
              value={date ? date.toLocaleDateString("en-GB").split('/').reverse().join('-') : ""} // แปลงวันที่ให้เป็นรูปแบบ "YYYY-MM-DD}
              name="date"
              onChange={(e) => setDate(new Date(e.target.value))}
              className="border w-[200px] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"

            />
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold  w-[200px]  text-right">รายละเอียด</label>
            <input
              type="text"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="border  w-[200px]  p-2 rounded-lg   focus:outline-none focus:ring-2 focus:ring-green-700 overflow-x-auto mt-4" 
            />
          
            <button
              onClick={handleSave}
              className="bg-[#008E00] text-white px-4 py-2 rounded flex items-center justify-center gap-2 "
            >
              <FaCheck /> บันทึกสวัสดิการ
            </button>
          </div>
        </div>
        <nav style={{
          display: 'grid' ,
          gridTemplateColumns: '60% 1fr',
          marginLeft: '130px' ,
          height: '500px' }}>
        <div className="overflow-x-auto mt-4 border">
          <table className="w-full border-collapse border text-sm ">
            <thead>
              <tr className="bg-[#D9D9D9] text-left text-[#008E00]">
                <th className="border p-2">วันที่เบิกใช้สวัสดิการ</th>
                <th className="border p-2">รายละเอียดสวัสดิการ</th>
                <th className="border p-2">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {benefitsList.length > 0 ? (
                benefitsList.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2">{item.date}</td>
                    <td className="border p-2">{item.detail}</td>
                    <td className="border p-2 text-center">{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="border p-2 text-center">ไม่มีข้อมูล</td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
      </nav>
    </div>
  </div>
  );
}
