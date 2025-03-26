"use client";
import { Kanit } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation"; // เพิ่ม import
import { useEffect, useState } from "react";
import { FaExclamationTriangle, FaKey, FaUser } from "react-icons/fa";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
});

export default function LoginPage() {
  const router = useRouter(); // เรียกใช้ useRouter
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);

  const rules = (
    <ol className="list-decimal list-inside text-white space-y-2">
      <li>ห้ามนำอุปกรณ์คอมพิวเตอร์ และ อุปกรณ์ต่อพ่วงทุกชนิดมาใช้กับ คอมพิวเตอร์ของบริษัทฯ โดยไม่ได้รับอนุญาต</li>
      <li>ห้ามบุคคลที่ไม่เกี่ยวข้องเข้าห้อง Server ก่อนได้รับอนุญาต</li>
      <li>ห้ามนำแผ่น CD/DVD หรือ สื่อบันทึกข้อมูลอื่นใด มาคัดลอก (Copy) ข้อมูลจากเครื่องคอมพิวเตอร์ของบริษัทฯ โดยไม่ได้รับอนุญาต</li>
      <li>ห้ามทำสำเนา สื่อสิ่งพิมพ์ เกี่ยวกับข้อมูลบริษัทฯ และ ลูกค้า ออกไปภายนอกบริษัทฯ ก่อนได้รับอนุญาต</li>
      <li>ห้ามสลับสับเปลี่ยน/ดัดแปลง/โยกย้าย หรือ นำอุปกรณ์ส่วนตัวมาต่อพ่วงกับเครื่องคอมพิวเตอร์ของบริษัทฯ โดยไม่ได้รับอนุญาต</li>
      <li> การเพิ่มรหัสพนักงานที่จะเข้าใช้ระบบงานของบริษัทฯ จะถูกกำหนดโดยแผนกบุคคล </li>
      <li>การเปลี่ยนรหัสผ่านจะต้องเปลี่ยนตามที่ระบบกำหนด ทุก 90 วัน หากไม่เปลี่ยนแปลง ระบบจะล็อค การเข้าระบบงาน</li>
      <li>รหัสผ่านของพนักงานทุกคน ถือเป็นความลับ ห้ามมิให้บุคคลอื่นล่วงรู้</li>
      <li>พนักงานจะเข้าเมนูระบบงานได้เฉพาะส่วนที่ตนได้รับมอบหมายเท่านั้น</li>
      <li>ห้ามมิให้นำ Software ทุกประเภทมาติดตั้งในเครื่องคอมพิวเตอร์ของบริษัทฯ โดยไม่ได้รับอนุญาต</li>
    </ol>
  );
  



  

  useEffect(() => {
    if (username) {
      fetch("/employee.json")  //
        .then((response) => response.json())
        .then((data) => {
          const foundEmployee = data.find((emp) => emp.employee_id === username);
          if (foundEmployee) {
            setEmployee(foundEmployee);
            setError("");
          } else {
            setEmployee(null);
            setError("ไม่พบรหัสพนักงานนี้");
          }
        });
    } else {
      setEmployee(null);
    }
  }, [username]);

  

  const handleLogin = () => {
    if (employee && employee.password === password) {
      // บันทึกข้อมูลผู้ใช้ลงใน localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({
        EID: employee.employee_id,
        Fname: employee.first_name,
        Lname: employee.last_name,
        Group: employee.group,
        Gate: employee.gate,
      }));
  
      // นำทางไปที่ Dashboard
      router.push("/formmainmenu");
    } else {
      setError("รหัสผ่านไม่ถูกต้อง");
      setLoginAttempts((prev) => prev + 1);
    }
  };
  

  const handleFocus = () => {
    if (!accepted) setShowAlert(true);
  };
  return (
    <div className={`flex w-full min-h-screen ${kanit.className} relative`}>
      {showAlert && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#303C48] p-6 rounded-lg shadow-2xl text-center border-gray-500 text-white">
            <FaExclamationTriangle className="text-[#EBFC1E] text-3xl mx-auto mb-2" />
            <p className="font-bold">กรุณาอ่านและรับทราบระเบียบการรักษาความปลอดภัยในระบบสารสนเทศ</p>
            <button onClick={() => setShowAlert(false)} className="mt-4 px-4 py-2 bg-[#D9D9D9] text-black rounded">OK</button>
          </div>
        </div>
      )}

      {/* Left Side - Conditions */}
      <div className="w-1/2 bg-[#48596B] p-8 flex flex-col justify-center">
        <Image src="/images/Vector_(2).png" width={100} height={116} alt="Logo" className="mx-auto" />
        <h1 className="text-2xl font-bold text-[#EBFC1E] mb-4 text-center pt-5">
          ระเบียบการรักษาความปลอดภัยในระบบสารสนเทศ
        </h1>
        {rules}

        {accepted && <p className="font-bold text-[#FFFF] mt-5">
          หากพนักงานท่านใด ฝ่าฝืน หรือ หลีกเลี่ยงที่จะปฏิบัติตามระเบียบวินัย 
          <br></br> พนักงานผู้นั้นจะได้รับโทษสถานหนักถึงขั้นเลิกจ้าง โดยไม่ จ่ายค่าชดเชย ทั้งนี้ 
          <br></br> ขอมอบหมายให้หัวหน้างานทุกคน ตรวจสอบ ควบคุม ดูแลให้เป็นไปตามระเบียนข้างต้น</p>}  
          
        <label className="mt-4 text-[#EBFC1E] flex items-center">
          <input type="checkbox" className="mr-2 w-5 h-5 outline-none ring-2 ring-[#EBFC1E] focus:ring-[#EBFC1E] bg-transparent" onChange={(e) => setAccepted(e.target.checked)} /> 
          ข้าพเจ้าได้อ่านและรับทราบระเบียบการรักษาความปลอดภัยในระบบสารสนเทศเรียบร้อยแล้ว
        </label>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <div className="p-8 max-w-sm w-full shadow-2xl rounded-2xl border-gray-300 bg-white">
          <div className="flex flex-col items-center mb-6">
            <Image src="/images/S11_LOGO_500.png" width={50} height={50} alt="Logo" className="mx-auto " />
            <h2 className="text-[#000] text-xl font-bold mt-4">Log In</h2>
          </div>
          <div className="mb-4 flex flex-col items-center">
            {employee && (
              <div className="flex flex-col items-center">
                <Image src={employee.profile_picture} width={180} height={180} alt="User Avatar" />
                <p className="text-[#000] text-lg mt-2 font-semibold">{`${employee.first_name} ${employee.last_name}`}</p>
              </div>
            )}
            <div className="relative w-full">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black stroke-[15] fill-none" />
              <input 
                type="text" 
                placeholder="รหัสพนักงาน" 
                className="border p-2 w-full rounded pl-10 mt-2 text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleFocus}
                readOnly={!accepted}
              />
            </div>
          </div>
          <div className="relative mb-4">
            <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black stroke-[15] fill-none" />
            <input 
              type="password" 
              placeholder="รหัสผ่าน" 
              className="border p-2 w-full rounded pl-10 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocus}
              readOnly={!accepted}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button 
            className={`w-full p-2 rounded ${username && password && accepted ? "bg-[#008E00] hover:bg-green-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            disabled={!username || !password || !accepted}
            onClick={handleLogin}
          >
            เข้าสู่ระบบงาน
          </button>
        </div>
        <div className="mt-4 text-center w-full max-w-sm">
          {username && password && (
            <p className="text-sm text-red-500">
              ท่านสามารถใส่รหัสผ่านผิดพลาดได้ไม่เกิน 5 ครั้ง ถ้าเกิน ระบบจะทำการ Lock ไม่ให้รหัสพนักงานของท่านใช้ระบบงานได้ ต้องติดต่อหัวหน้างานของท่าน
              <br/> *****.....***** <br/>
              ท่านใช้รหัสพนักงานผิดพลาดแล้ว {loginAttempts} ครั้ง
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
