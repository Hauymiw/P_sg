import { useState } from "react";
import TooltipButton from "./../../Tooltip/btbtooltip";
import styles from './tabsheet3.module.css';  // เนื่องจากไฟล์ CSS อยู่ในโฟลเดอร์เดียวกับ .jsx



export default function TabSheet3() {
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
        // ส่วนที่ 1 
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formbox}>
                <div className="grid grid-cols-2">
                    <div className={styles.box1}>
                        <div className={styles.box1g}>
                            <div className={styles.flexlabelinputg1}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700">
                                        ค่าลดหย่อนส่วนตัว
                                    </label>
                                    <TooltipButton text="หักลดหย่อนส่วนตัวได้ คนละ 60,000 บาท"
                                        position="left" />
                                </div>
                                <input
                                    type="number"
                                    id=""
                                    name=""
                                    className="border border-[1px] border-[#869BAF] p-2 rounded py-1 text-left"
                                    min={0}
                                    max={60000}
                                />
                            </div>
                            <div className={styles.flexlabelinputg1}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor="" className="text-sm font-medium text-black-700">
                                        ค่าลดหย่อนคู่สมรส
                                    </label>
                                    <TooltipButton text="จดทะเบียนสมรส และคู่สมรสไม่มีรายได้ หักลดหย่อนได้ 60,000 บาท" position="left" />
                                </div>
                                <input
                                    type="number"
                                    id=""
                                    name=""
                                    className="border border-[1px] border-[#869BAF] p-2 rounded py-1 text-left"
                                    min={0}
                                />
                            </div>
                            <div className={styles.flexlabelinputg1}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor="" className="text-sm font-medium text-black-700">
                                        จำนวนบุตรรวม
                                    </label>
                                    {/* Tooltip Button */}
                                    <TooltipButton text="ลดหย่อนบุตรได้คนละ 30,000 บาท โดยไม่จำกัดจำนวน การหักลดหย่อนย่อนบุตรเป็นกรณีเดียว
                                ที่กฎหมายอนุญาตให้ผู้มีเงินได้ และคู่สมรส สามารถใช้ลูกคนเดียวหักลดหย่อนช่ำกันได" position="left" />
                                </div>
                                <input
                                    type="number"
                                    id=""
                                    name=""
                                    className="border border-[1px] border-[#869BAF] p-2 rounded py-1 text-left"
                                    min={0}
                                />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor="" className="text-sm font-medium text-black-700">
                                        จำนวนเงินหักลดหย่อน
                                    </label>

                                </div>
                                <input
                                    type="number"
                                    id=""
                                    name=""
                                    className="border border-[1px] border-[#869BAF] p-2 rounded py-1 text-left"
                                    min={0}
                                />
                            </div>
                        </div>

                        <div className={styles.box1g}>
                            <div>
                                <div className={styles.flexlabelinputg1}>
                                    <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                                        บริษัทผู้รับประกัน
                                        <TooltipButton
                                            text="  ค่าเบี้ยประกันชีวิตหักลดหย่อนได้ตามจริง แต่ไม่เกิน 100,000 บาท ส่วนแรกหักได้ 10,000 บาท
                                        ส่วนทีเกิน 10,000 บาท หักได้ไม่เกินเงินได้หลังหักภาษีค่าใช้จ่าย แต่ไม่เกิน 90,000 บาท
                                        ในกรณีสามีหรือภรรยาของผู้มีเงินได้ ได้มีการประกันชีวิตและความเป็นสามีภรรยาได้มีตลอดปีภาษี
                                        ให้หักลดหย่อนได้ตามเกณฑ์ข้างต้น หักลดหย่อนเบี้ยประกันชีวิตคู่สมรสได้ ตามที่จ่ายจริง ไม่เกิน 10,000 บาท"
                                            position="left" />
                                    </label>
                                    <input type="text" className="border border-[1px] border-[#869BAF]  p-2 rounded py-1 text-left" />
                                </div>

                                <div className={styles.flexlabelinputg1}>
                                    <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                        กรมธรรม์ประกันชีวิตเลขที่
                                    </label>
                                    <input type="text" className="border  border-[1px] border-[#869BAF] p-2 rounded py-1 text-left" />
                                </div>

                                <div className={styles.flexlabelinputg1}>
                                    <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                        ค่าเบี้ยประกันชีวิตมีสิทธิหักลดหย่อน
                                    </label>
                                    <input type="text" className="border border-[1px] border-[#869BAF]  p-2 rounded py-1 text-left" />

                                </div>
                            </div>
                        </div>
                        <div className={styles.box1g}>
                            <div style={{ marginTop: "20px", marginBottom: "20px" }} >
                                <div className={styles.flexlabelinputg1}>
                                    <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                                        บริษัทผู้รับประกัน(คู่สมรส)
                                        <TooltipButton text="กรณีคู่สมรสไม่มีเงินได้และความเป็นสามีภรรยามีตลอดปีภาษี หักลดหย่อนเบี้ยประกันชีวิตคู่สมรสได้ ตามที่จ่ายจริง ไม่เกิน 10,000 บาท"
                                            position="left" />
                                    </label>
                                    <input type="text" className="border p-2  border-[1px] border-[#869BAF] rounded py-1 text-left" />
                                </div>

                                <div className={styles.flexlabelinputg1}>
                                    <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                        กรมธรรม์ประกันชีวิตเลขที่(คู่สมรส)
                                    </label>
                                    <input type="text" className="border p-2 border-[1px] border-[#869BAF] rounded py-1 text-left" />
                                </div>

                                <div className={styles.flexlabelinputg1}>
                                    <label htmlFor="" className="text-sm text-right  font-medium text-black-700 min-w-[250px] ">
                                        ค่าเบี้ยประกันชีวิตมีสิทธิหักลดหย่อน(คู่สมรส)
                                    </label>
                                    <input type="text" className="border p-2 border-[1px] border-[#869BAF] rounded py-1 text-left" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // ส่วนที่ 1  จบตรงนี่ */}
                    <div className={styles.box2} >
                        <div className={styles.box1g}  >
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700">
                                        ชื่อผู้ขายหน่วยลงทุน [RMF]
                                    </label>
                                    <TooltipButton
                                        text="ค่าซื้อหน่วยลงทุน(RMF) หักลดหย่อนได้ตามจริงแต่ไม่เกินร้อยละ 15 ของเงินได้โดยเมื่อรวมกับเงินสะสมที่จ่ายเข้ากองทุนสำรองเลี้ยงชีพ และหรือกองทุนกบข. แล้วไม่เกิน 500,000 บาท"
                                        position="left" />
                                </div>

                                <input type="number"
                                    className="border p-2  border-[1px] border-[#869BAF] rounded py-1 text-left" />
                            </div>

                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700 whitespace-nowrap">
                                        จำนวนเงินลงทุนกองทุนรวมเพื่อการเลี้ยงชีพ
                                    </label>
                                </div>

                                <input type="number"
                                    className="border p-2 border-[1px] border-[#869BAF] rounded py-1 text-left" />
                            </div>
                        </div>



                        <div className={styles.box1g} >
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700">
                                        ชื่อผู้ขายหน่วยลงทุน [LTF]
                                    </label>
                                    <TooltipButton
                                        text="ค่าซื้อหน่วยลงทุน (LTF) หักลดหย่อนได้ตามจริง แต่ไม่เกินร้อยละ 15 ของเงินได้และสูงสุดไม่เกิน 500,000 บาท"
                                        position="left" />

                                </div>
                                <input type="text"
                                    className="border p-2 border-[1px] border-[#869BAF] rounded py-1 text-left" />
                            </div>
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700">
                                        จำนวนเงินลงทุนกองทุนรวมหุ้นระยะยาว
                                    </label>
                                </div>

                                <input type="number"
                                    className="border p-2 border-[1px] border-[#869BAF] rounded py-1 text-left" />
                            </div>


                        </div>

                        <div className={styles.box1g} >
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700">
                                        ค่าซื้ออาคาร สถาบันการเงินให้กู้ยืม
                                    </label>
                                    <TooltipButton
                                        text="ดอกเบี้ยเงินกู้ยืมหักลดหย่อนได้ตามที่จ่ายจริงแต่ไม่เกิน 100,000 บาท กรณีมีผู้กู้ร่วมหลายคนให้หักลดหย่อนได้ทุกคน โดยเฉลี่ยค่าลดหย่อนตามจำนวนผู้กู้แต่รวมกันไม่เกิน 100,000 บาท"
                                        position="left" />

                                </div>
                                <input type="text"
                                    className="border p-2  border-[1px] border-[#869BAF] rounded py-1 text-left" />
                            </div>
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700">
                                        เลขที่สัญญากู้ยืมเพื่อที่อยู่อาศัย
                                    </label>
                                </div>

                                <input type="number"
                                    className="border p-2 border-[1px] border-[#869BAF]  rounded py-1 text-left" />
                            </div>

                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700">
                                        ดอกเบี้ยเงินกู้ยืมเพื่อที่อยู่อาศัย (บาท)
                                    </label>

                                </div>

                                <input type="number"
                                    className="border p-2 border-[1px] border-[#869BAF] rounded py-1 text-left" />
                            </div>


                        </div>


                    </div>
                </div>
            </form >
        </div >
    );
}
