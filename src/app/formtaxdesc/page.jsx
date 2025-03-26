"use client";
// import '../FromEmp/TabSheet5.css'
import Image from 'next/image';
import { useState } from "react";
import { FiX } from "react-icons/fi"; // นำเข้าไอคอน X
import { Info } from 'lucide-react';
import '../formtaxdesc/tab5.css';
import '../formtaxdesc/fromemp.css';
import Header from '../../components/Header/Header';
import TabSheet4 from '../../components/Tabsheet/Tabsheet4/tabsheet4';
import TabSheet3 from '../../components/Tabsheet/Tabsheet3/tabsheet3';
import TabSheet6 from '../../components/Tabsheet/Tabsheet6/tabsheet6';
import TabSheet7 from '../../components/Tabsheet/Tabsheet7/tabsheet7';
import TooltipButton from '../../components/Tooltip/btbtooltip';
import AddressSearch from '../../components/SearchTUM/AddressSearch';
export default function EmployeeForm() {

    const [selectedAddress, setSelectedAddress] = useState({
        district: "",  
        province: "",  
        subdistrict: "",  
        zipcode: "", 
    });
    
    const [showAddressSearch, setShowAddressSearch] = useState(false);


    const [activeTab, setActiveTab] = useState("TaxSheet1");
    const [showStatusDetails, setShowStatusDetails] = useState(false);
    const [showStatusDetails1, setShowStatusDetails1] = useState(false);

    const tooltip1 = `พิมพ์ค้นหา:\n ตำบล/แขวง\n อำเภอ/เขต\n จังหวัด\n รหัสไปรษณีย์`;
    const tooltip2 = 'กรุณาใส่จำนวน % ที่ต้องการซื้อ(EJIP) ก่อนวันที่ 20 ของทุกเดือน โดยใส่เป็น % จากฐานเงินเดือน';
    const tooltip3 = 'A = พนักงาน\n Q = ลาออก \n R = เชิญออก \n O = อื่นๆ  \n P = มดเอส ';
    const tooltip4 = 'รวมถึง SMS เงินเดือนด้วย';
    const tooltip5 = 'name_eid@sg.co.th';

    const [formData, setFormData] = useState({
        name: "",
        sex: "",
        proefix: "",
        surname: "",
        nameth: "",
        citizenId: "",
        email: "",
        address: "",
        phone: "",
        workStartDate: "",
        position: "",
        department: "",
        workStatus: "",
        training: "",
        achievements: "",
        accountsavings: "",
        lastname: "",
        employeeId: "93486",
        accoutslh: "",
        nameeng: "",
        institution: "",
        surnameEn: "",
        educational: "",
        nikname: "",
        EJIP: "",
        idTax: "",
        branch: "",
        birthDate: "",
        JobPosition: "",
        age: "",
        gradeavrage: "",
        idcardnumber: "",
        hospitals: "",
        WorkStartDate: "",
        member: "",
        pole: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "employeeId" && (!/^[0-9]*$/.test(value) || value.length > 5)) {
            return;
        }
        if ((name === "nameeng" || name === "surnameEn") && /[^a-zA-Z ]/.test(value)) {
            return;
        }
        if (name === "nikname" && /[0-9]/.test(value)) {
            return;
        }

        // คำนวณอายุจากวันที่เกิด
        if (name === "birthDate" && value) {
            const age = calculateAge(value);
            setFormData({ ...formData, [name]: value, age: age.toString() });
        } else {
            setFormData({ ...formData, [name]: value });
        }

    };

    // ฟังก์ชันสำหรับคำนวณอายุจากวันเกิด
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const month = today.getMonth() - birthDateObj.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    };

    const [selectedStatus, setSelectedStatus] = useState("single");

    const [selectedTime, setSelectedTime] = useState("8.30");
    const [selectedIncentive, setSelectedIncentive] = useState("no_Incentive");
    const [SelectedWear, setSelectedWear] = useState("nowear");
    const [Selecteddayoff, setSelecteddayoff] = useState("saturday");
    const [Selecteddovertime, setSelecteddovertime] = useState("no_overtime");



    const handleChangeStatus = (event) => {
        setSelectedStatus(event.target.value);
    };


    const handleChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleChangeincentive = (event) => {
        setSelectedIncentive(event.target.value);
    };

    const handleChangeWear = (event) => {
        setSelectedWear(event.target.value);
    };

    const handleChangedayoff = (event) => {
        setSelecteddayoff(event.target.value);
    };

    const handleChangeovertime = (event) => {
        setSelecteddovertime(event.target.value);
    };




    const handleSubmit = () => {
        console.log("บันทึกข้อมูล:", formData);
        alert("บันทึกข้อมูลเรียบร้อย!");
    };

    const tabs = [
        { key: "TaxSheet1", label: "ประวัติส่วนตัว" },
        { key: "TaxSheet2", label: "ที่อยู่ปัจจุบัน" },
        { key: "TaxSheet3", label: "ฐานในการคำนวณภาษี 1" },
        { key: "TaxSheet4", label: "ฐานในการคำนวณภาษี 2" },
        { key: "TaxSheet5", label: "ทะเบียนประวัติ (เฉพาะฝ่ายบุคคล)" },
        { key: "TaxSheet6", label: "รายละเอียดการฝึกอบรม (เฉพาะบุคคล)" },
        { key: "TaxSheet7", label: "ประวัติการใช้สวัสดิการ (เฉพาะบุคคล)" },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-100 border-b">
            {/* หัว Section */}
            <Header HeaderText="กรอกแบบสอบถามข้อมูลพนักงาน เพื่อใช้คำนวณภาษี โดย " />

            {/* Input รหัสพนักงาน และชื่อพนักงาน */}
            <div className='flex'>
                <div className="bg-white shadow-lg   pl-4 pt-4 w-full flex items-center space-x-4">
                    <div>
                        <label className="block text-sm font-medium text-[#000] text-[16px]">รหัสพนักงาน</label>
                    </div>
                    <input
                        type="text"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        className="border border-[#869BAF] p-2 rounded-lg w-32 pl-4 text-[16px] text-[#48596B]"
                        placeholder="รหัสพนักงาน"
                    />
                    <div>
                        <label className="block text-[16px] font-medium text-[#0043F1]"> ธัญญารัตน์ ละชินลา</label>
                    </div>
                </div>
                {/* ปุ่มกด */}
                <div className="flex bg-white justify-end pt-4 px-[20px]  ">
                    <button onClick={handleSubmit} className="bg-green-600 text-white mr-2 px-4 py-2 rounded-lg">บันทึก</button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg ">Close</button>

                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg pt-0 p-8 w-full h-full max-w-full overflow-x-auto flex-wrap">
                {/* Tabs ด้านบน */}
                <div className="flex border-b w-full menu">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex-1 text-center text-[12px] px-1 py-2 font-medium lex-wrap-reverse border-x border-t rounded-t-lg ml-[4px] mr-1${activeTab === tab.key
                                ? " border-[#008E00] text-[#008E00] mt-10"
                                : " border-[#68829B] text-[#68829B] mt-12"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* เนื้อหาในแต่ละ Tab */}
                <div className="mt-0 w-full border -mt-0 rounded-md border-[#008E00] content box_Content">
                    {/* ----Tab_1 ----*/}
                    {activeTab === "TaxSheet1" && (
                        <form onSubmit={handleSubmit} className="">


                            {/* ----- [บรรทัดที่ 1] ----- */}
                            <div className='grid-columms'>
                                <p className="text_prefix"><label>คำนำหน้า</label></p>
                                <input className="input_prefix"
                                    type="text"
                                    name="proefix"
                                    value={formData.proefix}
                                    onChange={handleInputChange}
                                    disabled />
                                <p className="text_name_th"><label >เพศ</label></p>
                                <div className='grid-columms-2'>
                                    <div className='grid-columms-2-1'>
                                        <select className="category"
                                            id="sex"
                                            name="sex"
                                            disabled>
                                            <option value="man">ชาย</option>
                                            <option value="female">หญิง</option>
                                        </select>
                                    </div>
                                    <div className='grid-columms-1 gap-2 pr-[10px]'>
                                        <p className="text_status"><label>สถานะ</label></p>
                                        <TooltipButton
                                            text={tooltip3}
                                            position='right'
                                            className />

                                    </div>
                                    <div className='grid-columms-2-2'>
                                        <select className="statusEmp"
                                            id="statusEmp"
                                            name="statusEmp"
                                            disabled>
                                            <option value="A">A</option>
                                            <option value="Q">Q</option>
                                            <option value="R">R</option>
                                            <option value="O">O</option>
                                            <option value="P">P</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* ----- [บรรทัดที่ 2] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>ชื่อ [ไทย]</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="nameth"
                                    value={formData.nameth}
                                    onChange={handleInputChange}
                                    disabled />
                                <p className="text_name_th"><label>เลขที่บัญชีออมทรัพย์</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="accountsavings"
                                    value={formData.accountsavings}
                                    disabled
                                    onChange={handleInputChange} />
                            </div>

                            {/* ----- [บรรทัดที่ 3] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>สกุล [ไทย]</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                    disabled />
                                <p className="text_name_th"><label>เลขที่บัญชีเงินเดือน LH</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="accoutslh"
                                    onChange={handleInputChange}
                                    value={formData.accoutslh}
                                    disabled />
                            </div>

                            {/* ----- [บรรทัดที่ 4] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>ชื่อ [อังกฤษ]</label></p>
                                <input className="input_name_en"
                                    type="text"
                                    name="nameeng"
                                    value={formData.nameeng}
                                    onChange={handleInputChange} />
                                <p className="text_name_th"><label>สถาบันการศึกษา</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="institution"
                                    onChange={handleInputChange}
                                    value={formData.institution}
                                    disabled />
                            </div>

                            {/* ----- [บรรทัดที่ 5] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>สกุล [อังกฤษ]</label></p>
                                <input className="input_name_en"
                                    type="text"
                                    name="nameeng"
                                    value={formData.nameeng}
                                    onChange={handleInputChange} />
                                <p className="text_name_th"><label>วุฒิการศึกษา</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="educational"
                                    onChange={handleInputChange}
                                    value={formData.educational}
                                    disabled />
                            </div>

                            {/* ----- [บรรทัดที่ 6] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>ชื่อเล่น</label></p>
                                <input className="input_name_en"
                                    type="text"
                                    name="nikname"
                                    value={formData.nikname}
                                    onChange={handleInputChange} />
                                <p className="text_name_th"><label>สาขา</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleInputChange}
                                    disabled />
                            </div>

                            {/* ----- [บรรทัดที่ 7] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>วันเกิด</label></p>
                                <div className='grid-columms-3'>
                                    <div className='grid-columms-2-1'>
                                        <input className="input_birthday"
                                            type="date"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleInputChange} />
                                    </div>
                                    <div className='grid-columms-2-2'><p className="text_status"><label>อายุ</label></p></div>
                                    <div className='grid-columms-2-2'>
                                        <input className="input_age"
                                            type="text"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            // readOnly
                                            disabled />
                                    </div>
                                </div>
                                <p className="text_name_th"><label>เกรดเฉลี่ย</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="gradeavrage"
                                    onChange={handleInputChange}
                                    value={formData.gradeavrage}
                                    // readOnly
                                    disabled />
                            </div>

                            {/* ----- [บรรทัดที่ 8] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>เลขที่บัตรประชาชน</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="idcardnumber"
                                    value={formData.idcardnumber}
                                    onChange={handleInputChange}
                                    disabled />
                                <p className="text_name_th"><label>สถานพยาบาลตามบัตรรับรองสิทธิ์</label></p>
                                <input className="input_name_en"
                                    type="text"
                                    name="hospitals"
                                    value={formData.hospitals}
                                    onChange={handleInputChange} />
                            </div>

                            {/* ----- [บรรทัดที่ 9] ----- */}
                            <div className='grid-columms'>
                                <div className='grid-columms-1 gap-2 pr-[10px]'>
                                    <p className="text_name_th_i "><label>ออกโดยเขต</label></p>

                                    <TooltipButton
                                        text={tooltip1}
                                        position='left'
                                        className />

                                </div>

                                <input
                                    type="text"
                                    value={selectedAddress.district}
                                    onClick={() => setShowAddressSearch(true)}
                                    readOnly
                                    className="input_name_th"
                                    placeholder="คลิกเพื่อค้นหาที่อยู่"

                                />

                                {showAddressSearch && (
                                    <AddressSearch
                                        onSelect={(address) => {
                                            setSelectedAddress(address);
                                            setShowAddressSearch(false);
                                        }}
                                        onClose={() => setShowAddressSearch(false)}
                                    />
                                )}
                                <p className="text_name_th"><label>ตำเเหน่งงาน</label></p>
                                <input className="input_name_en"
                                    type="text"
                                    name="JobPosition"
                                    value={formData.JobPosition}
                                    onChange={handleInputChange} />
                            </div>

                            {/* ----- [บรรทัดที่ 10] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>จังหวัด</label></p>
                                <input className="input_name_th"
                                    type="text"
                                    name="idcardnumber"
                                    value={selectedAddress.province}
                                    onChange={handleInputChange}
                                    disabled />
                                <p className="text_name_th"><label>สถานะภาพส่วนตัว</label></p>
                                <div className='grid-columms-2'>
                                    <div className='Group_input'>
                                        <input
                                            type="radio"
                                            id="single"
                                            name="status"
                                            value="single"
                                            checked={selectedStatus === "single"}
                                            onChange={handleChangeStatus}
                                        />
                                        <label className='Group_input_text' htmlFor="s_single">โสด</label>
                                    </div>

                                    <div className='Group_input'>
                                        <input
                                            type="radio"
                                            id="marry"
                                            name="status"
                                            value="marry"
                                            checked={selectedStatus === "marry"}
                                            onChange={handleChangeStatus}

                                        />
                                        <label className='Group_input_text' htmlFor="marry">สมรส</label>
                                    </div>
                                </div>
                            </div>

                            {/* ----- [บรรทัดที่ 11] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>เมื่อวันที่</label></p>
                                <div className='grid-columms-3'>
                                    <div className='grid-columms-2-1'>
                                        <input className="input_birthday"
                                            type="date"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleInputChange} />
                                    </div>
                                </div>
                                <p className="text_name_th"><label>จำนวนเงินที่ต้องการซื้อ(EJIP)/เดือน</label></p>
                                <div className='grid-columms-2'>
                                    <input className="input_name_en"
                                        type="text"
                                        name="EJIP"
                                        value={formData.EJIP}
                                        onChange={handleInputChange} />
                                    <div className='grid-columms-2-3'>
                                        <p style={{ padding: 5 }}>%</p>
                                        <TooltipButton
                                            text={tooltip2}
                                            position='left'
                                            className />
                                    </div>
                                </div>
                            </div>

                            {/* ----- [บรรทัดที่ 12] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>หมดอายุวันที่</label></p>
                                <div className='grid-columms-3'>
                                    <div className='grid-columms-2-1'>
                                        <input className="input_birthday"
                                            type="date"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>

                            {/* ----- [บรรทัดที่ 13] ----- */}
                            <div className='grid-columms'>
                                <p className="text_name_th"><label>เลขประจำตัวผู้เสียภาษี</label></p>
                                <input className="input_name_en"
                                    type="text"
                                    name="idTax"
                                    value={formData.idTax}
                                    onChange={handleInputChange} />
                            </div>
                        </form>
                    )}

                    {activeTab === "TaxSheet2" && (
                        <div>
                            <div className='Main_grid_2c'>
                                <div className="Content">
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>ที่อยู่ปัจจุบันเลขที่/ชั้น/อาคาร/หมู่บ้าน/หมู่ที่</div>
                                        <div>
                                            <textarea className='border_869BAF text_padding' rows="3" style={{ width: 300 }} name="address" id="address"></textarea>
                                        </div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>ซอย</div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>ถนน</div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='grid-columms-1 gap-2 pr-[10px] align-center '>
                                            <label className='Line_text' style={{ paddingRight: '0px' }}>สถานะ</label>
                                            <TooltipButton
                                                text={tooltip3}
                                                position='right'
                                                className />

                                        </div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>อำเภอ/เขต</div>
                                        <div className='Line_ask text_padding' style={{ fontSize: 30, textAlign: 'right' }}>🢓</div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>จังหวัด</div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>รหัสไปรษณีย์</div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                </div>
                                <div className="Content ">
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>เบอร์โทรศัพท์</div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>มือถือ</div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='grid-columms-1 gap-2 pr-[10px] align-center '>
                                            <label className='Line_text' style={{ paddingRight: '0px' }}>สำหรับรับ SMS
                                            </label>
                                            <TooltipButton
                                                text={tooltip4}
                                                position='right'
                                                className />

                                        </div>
                                        <div><input type="text" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>
                                        <div className='Line_text'>Email Address</div>
                                        <div><input type="email" className='Line_ask text_padding' /></div>
                                    </div>
                                    <div className='Line_margin_bottom Line_grid'>

                                        <div className='grid-columms-1 gap-2 pr-[10px] align-center '>
                                            <label className='Line_text' style={{ paddingRight: '0px' }}>SG Email Address
                                            </label>
                                            <TooltipButton
                                                text={tooltip5}
                                                position='right'
                                                className />

                                        </div>

                                        <div><input type="email" className='Line_ask_fix text_padding' placeholder="name_eid@sg.co.th" disabled /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {activeTab === "TaxSheet3" && (
                        <div>
                            <TabSheet3 />
                        </div>
                    )}

                    {activeTab === "TaxSheet4" && (
                        <div>
                            <TabSheet4 />
                        </div>
                    )}

                    {activeTab === "TaxSheet5" && (
                        <div>
                            <main>
                                <div className='Main_grid_3c'>
                                    <div className='Content'>
                                        <div className='Group_margin_bottom'>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>คำนำหน้า</div>
                                                <div className='Line_ask text_padding_select'>
                                                    <select className='category'
                                                        id="category"
                                                        name="category">
                                                        <option value="man">นาย</option>
                                                        <option value="female">นางสาว</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='Line_margin_bottom  Line_grid'>
                                                <div className='Line_text'>ชื่อ</div>
                                                <div><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>สกุล</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_grid'>
                                                <div className='Line_text'>เลขประจำตัวประชาชน</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                        </div>
                                        <div className='Group_margin_bottom'>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>เลขที่บัญชีกสิกรไทย</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>เลขประจำตัวผู้เสียภาษี</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>เลขที่บัญชีเงินเดือน LH</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_grid'>
                                                <div className='Line_text'>เลขที่บัญชีเงินค้ำประกัน</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>สถาบัญการศึกษา</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>วุฒิการศึกษา</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>สาขา</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                            <div className='Line_grid'>
                                                <div className='Line_text'>เกรดเฉลี่ย</div>
                                                <div ><input type="text" className='Line_ask text_padding' /></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='Content'>
                                        <div className=' Group_margin_bottom'>
                                            <div className='Line_margin_bottom Line_grid'>

                                                <div className='grid-columms-1 gap-2 pr-[10px] align-center '>
                                                    <label className='Line_text' style={{ paddingRight: '0px' }}>สถานะ
                                                    </label>
                                                    <TooltipButton
                                                        text={tooltip4}
                                                        position='right'
                                                        className />

                                                </div>

                                                <div className='Line_grid_sub_1'>
                                                    <div >
                                                        <input type="text" className='Line_ask text_padding' />
                                                    </div>

                                                    <div className='grid-columms-1 gap-2 pr-[10px] align-center '>
                                                        <label className='Line_text' style={{ paddingRight: '0px' }}>แผนกงาน
                                                        </label>
                                                    </div>
                                                    <div><input type="text" className='Line_ask text_padding' /></div>
                                                </div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='grid-columms-1 gap-2 pr-[10px] align-center '>
                                                    <label className='Line_text' style={{ paddingRight: '0px' }}>Group
                                                    </label>
                                                    <TooltipButton
                                                        text={tooltip4}
                                                        position='right'
                                                        className />

                                                </div>
                                                <div><input type="text" className='Line_ask text_padding' /></div>
                                            </div>

                                            {/* ratio */}
                                            <div className='Line_margin_bottom_double Line_grid '>
                                                <div></div>
                                                <div className='Line_ask text_padding_radio flex grid_3c'>
                                                    <p className='Line_text_ask'>เวลาเริ่มงาน</p>

                                                    <div className='flex'>
                                                        <input
                                                            type="radio"
                                                            id="time_830"
                                                            name="worktime"
                                                            value="8.30"
                                                            className='checkbox Group_checkbox '
                                                            checked={selectedTime === "8.30"}
                                                            onChange={handleChange}
                                                        />
                                                        <label className='text_radio' htmlFor="time_830">8.30 น.</label>
                                                    </div>

                                                    <div className='flex'>
                                                        <input
                                                            type="radio"
                                                            id="time_900"
                                                            name="worktime"
                                                            value="9.00"
                                                            className='checkbox Group_checkbox'
                                                            checked={selectedTime === "9.00"}
                                                            onChange={handleChange}
                                                        />
                                                        <label className='text_radio' htmlFor="time_900">9.00 น.</label>
                                                    </div>

                                                    <div className='flex'>
                                                        <input
                                                            type="radio"
                                                            id="time_1000"
                                                            name="worktime"
                                                            value="10.00"
                                                            className='checkbox Group_checkbox'
                                                            checked={selectedTime === "10.00"}
                                                            onChange={handleChange}
                                                        />
                                                        <label className='text_radio' htmlFor="time_100">10.00 น.</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='Line_grid'>
                                                <div></div>
                                                <div className='Line_grid_sub_2'>
                                                    <div className='Line_ask  grid_2c text_padding_radio'>
                                                        <p className='Line_text_ask'>Incentive</p>
                                                        <div className='flex'>
                                                            <input
                                                                type="radio"
                                                                id="no_Incentive"
                                                                name="marryme"
                                                                value="no_Incentive"
                                                                className='checkbox Group_checkbox'
                                                                checked={selectedIncentive === "no_Incentive"}
                                                                onChange={handleChangeincentive}
                                                            />
                                                            <label className='text_radio' htmlFor="n_Incentive">ไม่มี</label>

                                                        </div>
                                                        <div className='flex'>
                                                            <input
                                                                type="radio"
                                                                id="Incentive"
                                                                name="marryme"
                                                                value="Incentive"
                                                                className='checkbox Group_checkbox'
                                                                checked={selectedIncentive === "Incentive"}
                                                                onChange={handleChangeincentive}
                                                            />
                                                            <label className='text_radio' htmlFor="in_Incentive">มี</label>
                                                        </div>

                                                    </div>
                                                    <div></div>
                                                    <div className='Line_ask grid_2c Line_ask text_padding_radio'>
                                                        <p className='Line_text_ask'>ค่าสึกหรอ</p>
                                                        <div className='flex'>
                                                            <input
                                                                type="radio"
                                                                id="nowear"
                                                                name="notime"
                                                                value="nowear"
                                                                className='checkbox Group_checkbox'
                                                                checked={SelectedWear === "nowear"}
                                                                onChange={handleChangeWear}
                                                            />
                                                            <label className='text_radio' htmlFor="no_wear">ไม่มี</label>
                                                        </div>

                                                        <div className='flex'>
                                                            <input type="radio"
                                                                id="wear"
                                                                name="notime"
                                                                value="wear"
                                                                className='checkbox Group_checkbox'
                                                                checked={SelectedWear === "wear"}
                                                                onChange={handleChangeWear}
                                                            />
                                                            <label className='text_radio' htmlFor="wear_w">มี</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Group_margin_bottom'>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='grid-columms-1 gap-2 pr-[10px] align-center '>
                                                    <label className='Line_text' style={{ paddingRight: '0px' }}>SG Email Address
                                                    </label>
                                                    <TooltipButton
                                                        text={tooltip4}
                                                        position='right'
                                                        className />

                                                </div>
                                                <div><input type="email" className='Line_ask text_padding' placeholder="name_eid@sg.co.th" /></div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>วันที่เริ่มงาน</div>
                                                <div className='Line_grid_sub_1'>
                                                    <div >
                                                        <input className='Line_ask text_padding'
                                                            type="date"
                                                            name="WorkStartDate"
                                                            value={formData.WorkStartDate}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>วันที่เข้าเป็นสมาชิกกองทุนฯ</div>
                                                <div className='Line_grid_sub_1'>
                                                    <div >
                                                        <input className='Line_ask text_padding'
                                                            type="date"
                                                            name="member"
                                                            value={formData.member}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <button className="ml-2"
                                                        onClick={() => setFormData({ ...formData, member: "" })}
                                                        type="button" >
                                                        <img
                                                            src="/Images/delete.png"
                                                            alt="Delete"
                                                            className="w-6 h-6 cursor-pointer item-center"
                                                        />
                                                    </button>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'>วันทำงานสุดท้าย</div>
                                                <div className='Line_grid_sub_1'>
                                                    <div>
                                                        <input className='Line_ask text_padding'
                                                            type="date"
                                                            name="pole"
                                                            value={formData.pole}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <button className="ml-2"
                                                        onClick={() => setFormData({ ...formData, pole: "" })}
                                                        type="button" >
                                                        <img
                                                            src="/Images/delete.png"
                                                            alt="Delete"
                                                            className="w-6 h-6 cursor-pointer item-center"
                                                        />
                                                    </button>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div className='Line_grid'>
                                                <div></div>
                                                <div className='flex'>
                                                    <div className='checkbox'>
                                                        <input type='checkbox' />
                                                    </div>
                                                    <p>เพิ่มข้อมูลลงเวลาทำงาน</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='Content'>
                                        <div className='Group_margin_bottom'>
                                            <div className='Line_margin_bottom Line_grid'>
                                                <div className='Line_text'></div>
                                                <div></div>
                                            </div>
                                            <div className='Line_margin_bottom_double Line_grid'>
                                                <div className='Line_text'></div>
                                                <div></div>
                                            </div>

                                            <div className='Line_margin_bottom_double Line_ask grid_4c Line_ask text_padding_radio'>
                                                <p className='Line_text_ask'>เวรหยุด</p>
                                                <div className='flex'>
                                                    <input
                                                        type="radio"
                                                        id="saturday"
                                                        name="holiday"
                                                        value="saturday"
                                                        className='checkbox Group_checkbox'
                                                        checked={Selecteddayoff === "saturday"}
                                                        onChange={handleChangedayoff}
                                                    />
                                                    <label className='text_radio' htmlFor="saturday">เสาร์วันคี่</label>
                                                </div>

                                                <div className='flex'>
                                                    <input
                                                        type="radio"
                                                        id="pair_saturday"
                                                        name="้holiday"
                                                        value="pair_saturday"
                                                        className='checkbox Group_checkbox'
                                                        checked={Selecteddayoff === "pair_saturday"}
                                                        onChange={handleChangedayoff}
                                                    />
                                                    <label className='text_radio' htmlFor="p_saturday">เสาร์วันคู่</label>
                                                </div>

                                                <div className='flex'>
                                                    <input
                                                        type="radio"
                                                        id="off_saturday"
                                                        name="้holiday"
                                                        value="off_saturday"
                                                        className='checkbox Group_checkbox'
                                                        checked={Selecteddayoff === "off_saturday"}
                                                        onChange={handleChangedayoff}
                                                    />
                                                    <label className='text_radio' htmlFor="of_saturday">หยุดทุกเสาร์</label>
                                                </div>
                                                <div className='flex'>
                                                    <input
                                                        type="radio"
                                                        id="act_saturday"
                                                        name="้holiday"
                                                        value="act_saturday"
                                                        className='checkbox Group_checkbox'
                                                        checked={Selecteddayoff === "act_saturday"}
                                                        onChange={handleChangedayoff}
                                                    />
                                                    <label className='text_radio' htmlFor="a_saturday">ทำทุกเสาร์</label>
                                                </div>
                                            </div>

                                            <div className='Line_grid_sub_1'>
                                                <div className='Line_ask grid_2c Line_ask text_padding_radio'>
                                                    <p className='Line_text_ask'>ล่วงเวลา</p>

                                                    <div className='flex'>
                                                        <input
                                                            type="radio"
                                                            id="no_overtime"
                                                            name="overtime"
                                                            value="no_overtime"
                                                            className='checkbox Group_checkbox'
                                                            checked={Selecteddovertime === "no_overtime"}
                                                            onChange={handleChangeovertime}
                                                        />
                                                        <label className='text_radio' htmlFor="n_overtime">ไม่มี</label>
                                                    </div>

                                                    <div className='flex'>
                                                        <input type="radio"
                                                            id="overtime"
                                                            name="overtime"
                                                            value="overtime"
                                                            className='checkbox Group_checkbox'
                                                            checked={Selecteddovertime === "overtime"}
                                                            onChange={handleChangeovertime}
                                                        />
                                                        <label className='text_radio' htmlFor="overtime">มี</label>
                                                    </div>
                                                </div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    )}
                    {activeTab === "TaxSheet6" && (
                        <div>
                            <TabSheet6 />
                        </div>
                    )}
                    {activeTab === "TaxSheet7" && (
                        <div>
                            <TabSheet7 />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
