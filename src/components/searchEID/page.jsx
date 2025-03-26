"use client";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { XCircle } from "lucide-react";
import React from "react";
import "./searchEID.css";

const SearchEID = ({ onSave, onClose }) => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleSelectEmployee = (employee) => {
    setSelectedEmployees((prev) =>
      prev.some((e) => e.employeeId === employee.employeeId)
        ? prev.filter((e) => e.employeeId !== employee.employeeId)
        : [...prev, employee]
    );
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("/employees.json");

        if (!response.ok) {
          throw new Error("Failed to fetch employees data");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          if (searchQuery.trim() !== "") {
            const filtered = data.filter(
              (employee) =>
                employee?.employeeId?.includes(searchQuery) ||
                employee?.name?.includes(searchQuery)
            );
            setFilteredEmployees(filtered);
          } else {
            setFilteredEmployees([]);
          }
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [searchQuery]);

  const closeModal = () => {
    setSearchQuery("");
    setFilteredEmployees([]);
    onClose(); // เรียกฟังก์ชันปิด Modal
  };

  const handleSaveEmployees = () => {
    if (selectedEmployees.length === 0) {
      alert("กรุณาเลือกพนักงานก่อนบันทึก");
      return;
    }
    onSave(selectedEmployees); // ส่งค่าพนักงานที่เลือกกลับไป
    closeModal(); // ปิด Popup หลังจากบันทึกเสร็จ
  };

  return (
    <div className="modal-overlay">
      <div className="title-close">
        <h2 className="modal-title">
          โปรดเลือก
          <button className="close-button" onClick={closeModal}>
            <FaTimes size={30} />
          </button>
        </h2>

        <div className="modal-container">
          <div className="modal-input-container">
            <input
              type="text"
              placeholder="พิมพ์รหัสพนักงาน..."
              className="search-input"
              maxLength={5}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="button-group">
              <button className="btn btn-save" onClick={handleSaveEmployees}>
                <FaCheckCircle className="icon" size={25} />
                บันทึก
              </button>
              <button className="btn btn-cancel" onClick={closeModal}>
                <XCircle className="icon" size={25} />
                ยกเลิก
              </button>
            </div>
          </div>

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th className="table-header">EID</th>
                  <th className="table-header">NAM</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((employee) => (
                    <tr
                      key={employee.employeeId}
                      className={`p-2 cursor-pointer ${
                        selectedEmployees?.some(
                          (e) => e.employeeId === employee.employeeId
                        )
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => handleSelectEmployee(employee)}
                    >
                      <td className="table-cell">{employee.employeeId}</td>
                      <td className="table-cell">{employee.name}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="table-no-data">
                      ไม่พบข้อมูลพนักงาน
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEID;
