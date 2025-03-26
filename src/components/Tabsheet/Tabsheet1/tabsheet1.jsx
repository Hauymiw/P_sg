import { useState } from "react";
import TooltipButton from '../../Tooltip/btbtooltip';
// Reusable InputField component
const InputField = ({ label, id, name, value, onChange, disabled = false }) => (
    <div className="grid grid-cols-2 gap-4" style={{ marginTop: "5px" }}>
        <label htmlFor={id} className="text-sm font-medium text-black-700 text-right">
            {label}
        </label>
        <input
            type="number"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="border p-2 rounded py-1 text-left"
            disabled={disabled}
            style={{ height: "38px" }}
        />
    </div>
);

const btnclassTooltip = "text-black   hover:bg-gray-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-4 h-4 flex items-center justify-center border border-gray-500";
export default function TabSheet1() {
    const [formData, setFormData] = useState({
        personalDeduction: "",
        spouseDeduction: "",
        totalChildren: "",
        childrenNotInSchool: "",
        amtchildrenNotInSchool: "",
        childrenInSchool: "",
        amtchildrenInSchool: "",
        insuranceCompany: "",
        policyNumber: "",
        lifeInsurancePremium: "",
        spouseInsuranceCompany: "",
        spousePolicyNumber: "",
        spouseLifeInsurancePremium: "",
        rmfInvestmentCompany: "",
        rmfInvestmentAmount: "",
        ltfInvestmentCompany: "",
        ltfInvestmentAmount: "",
        mortgageContractNumber: "",
        mortgageInterest: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="justify-center p-10">
            <form onSubmit={handleSubmit} className="px-4 py-2 bg-white rounded-lg w-full max-w-4xl space-y-4">

                <div className="grid grid-cols-2 gap-4" style={{ marginTop: "5px" }}>
                    <div className="text-right flex items-center justify-end gap-2">
                        <label htmlFor="childrenNotInSchool" className="text-sm font-medium text-black-700">
                            ค่าลดหย่อนส่วนตัว
                        </label>

                        <TooltipButton text="หักลดหย่อนส่วนตัวได้ คนละ 60,000 บาท" position="left" />
                    </div>
                    <input
                        type="number"
                        id="childrenNotInSchool"
                        name="childrenNotInSchool"
                        className="border p-2 rounded py-1 text-left"
                        min={0}
                        max={60000}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4" style={{ marginTop: "5px" }}>
                    <div className="text-right flex items-center justify-end gap-2">
                        <label htmlFor="childrenNotInSchool" className="text-sm font-medium text-black-700">
                            ค่าลดหย่อนคู่สมรส
                        </label>

                        <TooltipButton text="จดทะเบียนสมรส และคู่สมรสไม่มีรายได้ หักลดหย่อนได้ 60,000 บาท" position="left" />
                    </div>
                    <input
                        type="number"
                        id="childrenNotInSchool"
                        name="childrenNotInSchool"
                        className="border p-2 rounded py-1 text-left"
                        min={0}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4" style={{ marginTop: "5px" }}>
                    <div className="text-right flex items-center justify-end gap-2">
                        <label htmlFor="childrenNotInSchool" className="text-sm font-medium text-black-700">
                            จำนวนบุตรรวม
                        </label>

                        {/* Tooltip Button */}
                        <TooltipButton text="ลดหย่อนบุตรได้คนละ 30,000 บาท โดยไม่จำกัดจำนวน การหักลดหย่อนย่อนบุตรเป็นกรณีเดียว
                                ที่กฎหมายอนุญาตให้ผู้มีเงินได้ และคู่สมรส สามารถใช้ลูกคนเดียวหักลดหย่อนช่ำกันได" position="left" />
                    </div>
                    <input
                        type="number"
                        id="childrenNotInSchool"
                        name="childrenNotInSchool"
                        className="border p-2 rounded py-1 text-left"
                        min={0}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4" style={{ marginTop: "5px" }}>
                    <div className="text-right flex items-center justify-end gap-2">
                        <label htmlFor="childrenNotInSchool" className="text-sm font-medium text-black-700">
                            บุตรไม่ศึกษา (คน)
                        </label>
                    </div>

                    {/* Input Fields */}
                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            id="childrenNotInSchool"
                            name="childrenNotInSchool"
                            className="border p-2 rounded py-1 text-left"
                            disabled
                        />
                        <div className="flex items-center">
                            <label htmlFor="amtchildrenNotInSchool" className="text-sm text-right pr-5  font-medium text-black-700 min-w-[250px]">
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id="amtchildrenNotInSchool"
                                name="amtchildrenNotInSchool"
                                className="border p-2 rounded py-1 text-left"
                                disabled
                            />
                        </div>
                    </div>
                </div>



                <div className="grid grid-cols-2 gap-4 mt-4" style={{ marginTop: "5px" }}>
                    <div className="text-right">
                        <label htmlFor="" className="text-sm font-medium text-black-700">
                            บุตรศึกษา (คน)
                        </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="text" className="border p-2 rounded py-1 text-left" disabled />
                        <div className="flex items-center">
                            <label htmlFor="" className="text-sm text-right pr-5 font-medium text-black-700 min-w-[250px]">
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input type="text" className="border p-2 rounded py-1 text-left" />

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-right">
                        <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                            บริษัทผู้รับประกัน
                            <TooltipButton
                                text="ค่าเบี้ยประกันชีวิตหักลดหย่อนได้ตามจริง แต่ไม่เกิน 100,000 บาท ส่วนแรกหักได้ 10,000 บาท
                                        ส่วนทีเกิน 10,000 บาท หักได้ไม่เกินเงินได้หลังหักภาษีค่าใช้จ่าย แต่ไม่เกิน 90,000 บาท
                                        ในกรณีสามีหรือภรรยาของผู้มีเงินได้ ได้มีการประกันชีวิตและความเป็นสามีภรรยาได้มีตลอดปีภาษี
                                        ให้หักลดหย่อนได้ตามเกณฑ์ข้างต้น หักลดหย่อนเบี้ยประกันชีวิตคู่สมรสได้ ตามที่จ่ายจริง ไม่เกิน 10,000 บาท"
                                position="left" />
                        </label>
                    </div>
                    <div className="flex items-center gap-4" >
                        <input type="text" className="border p-2 rounded py-1 text-left" />
                        <div className="flex items-center" >
                            <label htmlFor="" className="text-sm text-right pr-5  font-medium text-black-700 min-w-[250px]">
                                กรมธรรม์ประกันชีวิตเลขที่
                            </label>
                            <input type="text" className="border p-2 rounded py-1 text-left" />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="" className="text-sm font-medium text-black-700 min-w-[250px]">
                                ค่าเบี้ยประกันชีวิตมีสิทธิหักลดหย่อน

                            </label>

                            <input type="text" className="border p-2 rounded py-1 text-left" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 " style={{ marginTop: "5px" }}>
                    <div className="text-right">
                        <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                            บริษัทผู้รับประกัน(คู่สมรส)
                            <TooltipButton text="กรณีคู่สมรสไม่มีเงินได้และความเป็นสามีภรรยามีตลอดปีภาษี หักลดหย่อนเบี้ยประกันชีวิตคู่สมรสได้ ตามที่จ่ายจริง ไม่เกิน 10,000 บาท"
                                position="left" />
                        </label>
                    </div>
                    <div className="flex items-center gap-4" >
                        <input type="text" className="border p-2 rounded py-1 text-left" />
                        <div className="flex items-center">
                            <label htmlFor="" className="text-sm pr-5  text-right  text-black-700 min-w-[250px]">
                                กรมธรรม์ประกันชีวิตเลขที่(คู่สมรส)
                            </label>
                            <input type="text" className="border p-2 rounded py-1 text-left" />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="" className=" text-sm  text-black-700 min-w-[250px]">
                                ค่าเบี้ยประกันชีวิตมีสิทธิหักลดหย่อน(คู่สมรส)
                            </label>


                            <input type="text" className="border p-2 rounded py-1 text-left" />
                        </div>
                    </div>
                </div>



                <div className="grid grid-cols-2 gap-4 mt-4" >
                    <div className="text-right">
                        <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                            ชื่อผู้ขายหน่วยลงทุน [RMF]
                            <TooltipButton
                                text="ค่าซื้อหน่วยลงทุน(RMF) หักลดหย่อนได้ตามจริงแต่ไม่เกินร้อยละ 15 ของเงินได้โดยเมื่อรวมกับเงินสะสมที่จ่ายเข้ากองทุนสำรองเลี้ยงชีพ และหรือกองทุนกบข. แล้วไม่เกิน 500,000 บาท"
                                position="left" />
                        </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="text" className="border p-2 rounded py-1 text-left" />
                        <div className="flex items-center">
                            <label htmlFor="" className="text-sm pr-1  text-left font-medium text-black-700 min-w-[250px]">
                                จำนวนเงินลงทุนกองทุนรวมเพื่อการเลี้ยงชีพ
                            </label>

                            <input type="text" className="border p-2 rounded py-1 text-left" />
                        </div>
                    </div>
                </div>

                

                <div className="grid grid-cols-2 gap-4 mt-4" style={{ marginTop: "5px" }}>
                    <div className="text-right">
                        <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                            ชื่อผู้ขายหน่วยลงทุน [LTF]
                            <TooltipButton
                                text="ค่าซื้อหน่วยลงทุน (LTF) หักลดหย่อนได้ตามจริง แต่ไม่เกินร้อยละ 15 ของเงินได้และสูงสุดไม่เกิน 500,000 บาท"
                                position="left" />
                        </label>
                    </div>
                    <div className="flex items-center gap-4" >
                        <input type="text" className="border p-2 rounded py-1 text-left" />
                        <div className="flex items-center">
                            <label htmlFor="" className="text-sm pr-5 text-right font-medium text-black-700 min-w-[250px]">
                                จำนวนเงินลงทุนกองทุนรวมหุ้นระยะยาว
                            </label>
                            <input type="text" className="border p-2 rounded py-1 text-left" />
                        </div>
                    </div>
                </div>

                
                <div style={{ marginTop: "15px" }}>
                    <InputField label="ค่าซื้ออาคาร สถาบันการเงินให้กู้ยืม" id="mortgageContractNumber" name="mortgageContractNumber" value={formData.mortgageContractNumber} onChange={handleChange} />
                    <InputField label="เลขที่สัญญากู้ยืมเพื่อที่อยู่อาศัย" id="mortgageContractNumber" name="mortgageContractNumber" value={formData.mortgageContractNumber} onChange={handleChange} />
                    <div className="grid grid-cols-2 gap-4" style={{ marginTop: "5px" }}>
                        <div className="text-right flex items-center justify-end gap-2">
                            <label htmlFor="childrenNotInSchool" className="text-sm font-medium text-black-700">
                            ดอกเบี้ยเงินกู้ยืมเพื่อที่อยู่อาศัย (บาท)
                            </label>

                            <TooltipButton text="ดอกเบี้ยเงินกู้ยืมหักลดหย่อนได้ตามที่จ่ายจริงแต่ไม่เกิน 100,000 บาท กรณีมีผู้กู้ร่วมหลายคนให้หักลดหย่อนได้ทุกคน โดยเฉลี่ยค่าลดหย่อนตามจำนวนผู้กู้แต่รวมกันไม่เกิน 100,000 บาท" position="left" />
                        </div>
                        <input
                            type="number"
                            id=""
                            name=""
                            className="border p-2 rounded py-1 text-left"
                            min={0}
                            max={60000}
                        />
                    </div>
                
                </div>
            </form>
        </div>
    );
}
