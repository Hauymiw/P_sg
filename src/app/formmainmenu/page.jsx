"use client";


import {
    Calculator,
    Clipboard,
    Clock,
    MessageSquare,
    CheckSquare,
    Fuel,
    Key,
    Info,
    Search as SearchIcon,
    User as UserIcon,
    LogOut,
    Menu,
    ChevronDown,
    ChevronRight,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function Dashboard() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Home");
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const router = useRouter(); // Initialize router
    const [user, setUser] = useState({ EID: "", Fname: "", Lname: "" });
    
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (storedUser) {
            setUser(storedUser);
        } else {
            router.push("/"); // Redirect to homepage if no user is found
        }
    }, [router]);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setActiveSubMenu(null);

        // ถ้าไม่ใช่หน้า Home ให้ปิด Sidebar
        if (menu !== "Home") {
            setIsCollapsed(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");  // ลบข้อมูลผู้ใช้จาก localStorage
        router.push("/");  // นำทางไปยังหน้าล็อกอิน
    };


    const handleSubMenuClick = (subMenu) => {
        setActiveSubMenu(activeSubMenu === subMenu ? null : subMenu);
    };

    const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        <div className="h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="bg-white shadow-md p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/images/S11_LOGO_500.png"
                            alt="S 11 GROUP"
                            className="h-8"
                        />
                        <h1 className="text-xl font-bold text-green-700">S 11 GROUP</h1>
                    </div>
                    <div className="flex items-center space-x-4 relative">
                        <div
                            className="flex items-center justify-between p-2 cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <span className="text-gray-700">{user.EID} คุณ{user.Fname} {user.Lname}</span>
                            <UserIcon size={24} className="text-gray-600" />
                            <ChevronDown size={20} className="text-gray-600" />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-[120px] w-60 bg-white shadow-lg rounded-md p-2">
                                <p className="text-gray-700">{user.EID} คุณ{user.Fname} {user.Lname}</p>
                                <a href="/" className="flex items-center px-4 py-2 text-red-600">
                                    <LogOut className="mr-2 flex-shrink-0" size={20} /> Log Out
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <nav className="flex space-x-6 mt-2 border-b border-gray-200 pb-2 border-t pt-2">
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "Home" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("Home")}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "สินเชื่อการตลาด" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("สินเชื่อการตลาด")}
                    >
                        สินเชื่อการตลาด
                    </a>
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "บริหารลูกหนี้" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("บริหารลูกหนี้")}
                    >
                        บริหารลูกหนี้
                    </a>
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "บุคคล ธุรการ" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("บุคคล ธุรการ")}
                    >
                        บุคคล ธุรการ
                    </a>
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "การเงิน" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("การเงิน")}
                    >
                        การเงิน
                    </a>
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "กิจการสาขา" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("กิจการสาขา")}
                    >
                        กิจการสาขา
                    </a>
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "ปฏิบัติการ" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("ปฏิบัติการ")}
                    >
                        ปฏิบัติการ
                    </a>
                    <a
                        href="#"
                        className={`text-gray-700 hover:text-green-700 transition-colors pb-2 ${activeMenu === "พนักงาน" ? "font-semibold border-b-2 border-green-600 text-green-700" : ""
                            }`}
                        onClick={() => handleMenuClick("พนักงาน")}
                    >
                        พนักงาน
                    </a>
                </nav>
            </header>

            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <aside
                    className={`bg-white shadow-lg p-4 transition-all duration-300 ${isCollapsed ? "w-17" : "w-64"}`}>

                    {activeMenu === "Home" && (
                        <nav className="space-y-1 p-2 rounded-md">
                            {[
                                { icon: Calculator, text: "คำนวณค่างวด" },
                                { icon: Clipboard, text: "ดู HP Card" },
                                { icon: Clock, text: "ลงเวลาทำงาน" },
                                { icon: SearchIcon, text: "ค้นหาเลขสัญญา" },
                                { icon: MessageSquare, text: "ส่งข้อความถึงกัน" },
                                { icon: CheckSquare, text: "ตรวจสอบข้อความถึงกัน" },
                                { icon: Fuel, text: "คีย์เบิกบิลน้ำมัน" },
                                { icon: Key, text: "เปลี่ยนรหัสผ่าน" },
                                { icon: UserIcon, text: "กรอกข้อมูลพนักงาน" },
                                { icon: Info, text: "About S Group" },
                            ].map(({ icon: Icon, text }) => (
                                <a
                                    key={text}
                                    href="#"
                                    onClick={() => setSelectedMenu(text)}
                                    className={`flex items-center px-4 py-2 rounded-md transition duration-300 ${selectedMenu === text ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
                                        }`}
                                >
                                    <Icon className="mr-2 flex-shrink-0" size={20} />
                                    {!isCollapsed && text}
                                </a>
                            ))}
                        </nav>
                    )}
                    {activeMenu === "บุคคล ธุรการ" && (
                        <div className="relative">
                            <a
                                href="#"
                                className={`flex items-center px-4 py-2 ${activeSubMenu === "บุคคล" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => handleSubMenuClick("บุคคล")}
                            >
                                {!isCollapsed && "1. บุคคล"}
                                {!isCollapsed && <ChevronRight className=" absolute  right-0 mr-5 flex-shrink-0" size={20} />}

                            </a>

                            {activeSubMenu === "บุคคล" && (
                                <div className="absolute left-full top-0 ml-2 w-80 bg-white shadow-lg p-4 rounded-lg border border-gray-200  ">
                                    <div className="relative group">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md ">
                                            1. คีย์ข้อมูลพนักงาน
                                        </a>
                                        {/* เมนูย่อย */}
                                        <div className="absolute left-full top-0 ml-2 w-60 bg-white shadow-lg p-2 rounded-lg border border-gray-200 hidden group-hover:block">

                                            <a href="./formGetEid" className="block px-4 py-2 hover:bg-gray-100 rounded-md">1.1 เพิ่มพนักงาน</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">1.2 แก้ไขข้อมูลพนักงาน</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">1.3 ลบพนักงาน</a>
                                        </div>

                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">2.พิมพ์รายงานลงเวลา</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">3.คีย์ข้อมูลการลา</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">4.พิมพ์ บัตรพนักงาน</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">5.ประวัติการใช้รถ</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">6.บิลน้ำมัน</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">7.พิมพ์ รายงาน ขาด ลา มาสาย</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">8.แก้ไขเวลาทำงาน</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">9.พิมพ์รายงานการลงเวลาทำงาน</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ก.พิมพ์รายงานการลา</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ข.จัดเตรียมข้อมูลเงินเดือน</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ค.ตรวจสอบข้อมูลสถิติพนักงาน</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ง.เพิ่ม แก้ไขพิกัด GPS พนักงาน</a>
                                    </div>
                                </div>
                            )}

                            <a
                                href="#"
                                className={`flex items-center px-4 py-2 ${activeSubMenu === "ธุรการ" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"}`}
                                onClick={() => handleSubMenuClick("ธุรการ")}
                            >
                                {!isCollapsed && "2. ธุรการ"}
                                {!isCollapsed && <ChevronRight className=" absolute  right-0 mr-5 flex-shrink-0" size={20} />}
                            </a>
                            {activeSubMenu === "ธุรการ" && (
                                <div className="absolute left-full top-0 ml-2 w-80 bg-white shadow-lg p-4 rounded-lg border border-gray-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">1.คีย์สัญญาที่ส่งจม.ไม่ได้</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">2.แก้ไขที่อยู่ลูกค้า</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">3.ระบบดึงเอกสาร จัด OR</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">4.ทำ Lock Com</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">5.ทำรายการทรัพย์สิน</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">6.ระบบการส่งเอกสาร</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">7.งานทะเบียน</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">8.งานประกันทั่วไป</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">9.แก้ไข/เพิ่มเติม เลขที่กรมธรรม์</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ก.คีย์รับสัญญา/รับเล่มทะเบียน</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ข.พิมพ์ สติ๊กเกอร์สัญญา</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ค.ระบบใบตอบรับ</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">ง.พิมพ์ การ์ดลูกค้า</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">จ.เมนูย่อย</a>
                                </div>
                            )}
                        </div>
                    )}





                    {/* Bottom Section */}
                    <div className="fixed bottom-0  p-4 z-10 border-t ">
                        <a href="#" onClick={handleLogout} className="flex items-center px-4 py-2 text-red-600">
                            <LogOut className="mr-2 flex-shrink-0" size={20} />{" "}
                            {!isCollapsed && "Log Out"}
                        </a>


                        {activeMenu === "Home" && (
                            <button
                                onClick={toggleSidebar}
                                className="flex items-center w-full px-4 py-2 text-gray-600"
                            >
                                <Menu className="mr-2 flex-shrink-0" size={20} /> {" "}
                                {!isCollapsed && "ซ่อนเมนู"}
                            </button>
                        )}


                    </div>

                </aside>
                {/* Main Content */}
                <main className="flex-1 p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">ข่าวสาร</h1>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ค้นหา"
                                className="border rounded-md px-4 py-2 pr-10"
                            />
                            <SearchIcon
                                className="absolute right-3 top-2.5 text-gray-500"
                                size={20}
                            />
                        </div>
                    </div>

                    {/* News Section */}
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="bg-green-500 p-2 rounded-md text-white">📄</div>
                            <span>กรอกแบบสอบถามข้อมูลพนักงานเพื่อใช้คำนวณภาษี</span>
                        </div>
                        <a href="./formtaxdesc">
                            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">
                                กรอกข้อมูล
                            </button>
                        </a>
                    </div>

                    {/* Placeholder for additional content */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-300 h-40 rounded-lg"></div>
                        <div className="bg-gray-300 h-40 rounded-lg relative">
                            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded-md">
                                NEW
                            </span>
                        </div>
                        <div className="bg-gray-300 h-60 rounded-lg"></div>
                        <div className="bg-gray-300 h-60 rounded-lg"></div>
                    </div>
                </main>
            </div>
        </div>
    );
}