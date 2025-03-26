// 93486 

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
    const tooltip1 = "หักลดหย่อนส่วนตัวได้ คนละ 60,000 บาท";
    const tooltip2 = 'จดทะเบียนสมรส และคู่สมรสไม่มีรายได้ หักลดหย่อนได้ 60,000 บาท';
    const tooltip3 = 'ลดหย่อนบุตรได้คนละ 30,000 บาท โดยไม่จำกัดจำนวน การหักลดหย่อนย่อนบุตรเป็นกรณีเดียวที่กฎหมายอนุญาตให้ผู้มีเงินได้ และคู่สมรส สามารถใช้ลูกคนเดียวหักลดหย่อนช่ำกันได';
    const tooltip4 = 'ลดหย่อนภาษีได้ ตามที่จ่ายจริงสูงสุดไม่เกิน 100,000 บาท ในกรณีที่คู่สมรสไม่มีรายได้ ลดหย่อนค่าเบี้ยประกันของคู่สมรสได้สูงสุด 10,000 บาท โดยเงื่อนไขของค่าลดหย่อนประกันชีวิตคือ ต้องมีระยะเวลาคุ้มครอง 10 ปีขึ้นไป ต้องทำประกันกับบริษัทประกันชีวิตในประเทศไทย และถ้าหากมีการเวนคืนกรมธรรม์ก่อนครบ 10 ปี จะถือว่าเป็นการผิดเงื่อนไข ไม่สามารถนำมาลดหย่อนภาษีได้';
    const tooltip5 = 'ลดหย่อนภาษีได้ตามที่จ่ายจริงสูงสุดไม่เกิน 25,000 บาท และเมื่อรวมกับประกันชีวิตและประกันแบบสะสมทรัพย์ ต้องไม่เกิน 100,000 บาท'; //บริษัทประกันสุขภาพ และประกันอุบัติเหตุที่คุ้มครองสุขภาพ
    const tooltip6 = 'กรณีคู่สมรสไม่มีเงินได้และความเป็นสามีภรรยามีตลอดปีภาษ ีหักลดหย่อนเบี้ยประกันชีวิตคู่สมรสได้ ตามที่จ่ายจริง ไม่เกิน 10,000 บาท'; // บริษัทประกันชีวิตและประกันแบบสะสมทรัพย์(คู่สมรส)
    const tooltip7 = 'ลดหย่อนภาษีได้คนละ 30,000 บาท ไม่เกิน 2 คน และจะต้องไม่ใช่พ่อแม่บุญธรรม โดยบิดามารดาจะต้องมีอายุมากกว่า 60 ปีในปีภาษีนั้น และมีรายได้ต่อปีไม่เกิน 30,000 บาท ซึ่งไม่สามารถใช้สิทธิลดหย่อนซ้ำระหว่างพี่น้องได้ หากจะใช้สิทธิลดหย่อนเลี้ยงดูแม่เพียงคนเดียว ต้องตกลงกับพี่น้องว่าใครจะใช้สิทธินี้' //ค่าอุปการะเลี้ยงดูบิดา มารดา
    const tooltip8 = 'ลดหย่อนภาษีได้คนละ 30,000 บาท ไม่เกิน 2 คน จะต้องไม่ใช่พ่อแม่บุญธรรมของคู่สมรส และคู่สมรสไม่มีรายได้เลยตลอดปีภาษีนั้น'; //ค่าเบี้ยประกันสุขภาพบิดา มารดา
    const tooltip9 = 'ดอกเบี้ยเงินกู้ยืมหักลดหย่อนได้ตามที่จ่ายจริงแต่ไม่เกิน 100,000 บาท กรณีมีผู้กู้ร่วมหลายคน ให้หักลดหย่อนได้ทุกคน โดยเฉลี่ยค่าลดหย่อนตามจำนวนผู้กู้แต่รวมกันไม่เกิน 100,000 บาท'; //สถาบันการเงินให้กู้ยืมเพื่อชื้อหรือสร้างที่อยู่อาศัย



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        // ส่วนที่ 1 
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formbox}>

                <div className={styles.box1}>
                    <div className={styles.box1g} style={{ paddingTop: '0px' }}>
                        <div className={styles.flexlabelinputg1} >
                            <div className="text-right flex  justify-end gap-2">
                                <label htmlFor=""
                                    className="text-sm font-medium text-black-700">
                                    ค่าลดหย่อนส่วนตัว
                                </label>
                                <TooltipButton text={tooltip1}
                                    position="left" />
                            </div>
                            <input
                                type="number"
                                id=""
                                name=""
                                className=""
                                min={0}
                                max={60000}
                            />
                        </div>
                        <div className={styles.flexlabelinputg1}>
                            <div className="text-right flex   justify-end gap-2">
                                <label htmlFor="" className="text-sm font-medium text-black-700">
                                    ค่าลดหย่อนคู่สมรส
                                </label>
                                <TooltipButton text={tooltip2} position="left" />
                            </div>
                            <input
                                type="number"
                                id=""
                                name=""

                                min={0}
                            />
                        </div>
                        <div className={styles.flexlabelinputg1}>
                            <div className="text-right flex   justify-end gap-2">
                                <label htmlFor="" className="text-sm font-medium text-black-700">
                                    จำนวนบุตรรวม
                                </label>
                                {/* Tooltip Button */}
                                <TooltipButton text={tooltip3} position="left" />
                            </div>
                            <input
                                type="number"
                                id=""
                                name=""
                                min={0}
                            />
                        </div>

                        <div className={styles.flexlabelinputg1}>
                            <div className="text-right flex justify-end gap-2">
                                <label htmlFor="" className="text-sm font-medium text-black-700">
                                    จำนวนเงินหักลดหย่อน
                                </label>

                            </div>
                            <input
                                type="number"
                                id=""
                                name=""
                                min={0}
                            />
                        </div>
                    </div>

                    <div className={styles.box1g}>
                        <div>
                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                                    บริษัทประกันชีวิตและประกันแบบสะสมทรัพย์
                                    <TooltipButton
                                        text={tooltip4}
                                        position="left" />
                                </label>
                                <input type="text" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                    กรมธรรม์ประกันชีวิตเลขที่
                                </label>
                                <input type="text" className="border  border-[1px] border-[#869BAF] p-2 rounded py-1 text-left" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                    ค่าเบี้ยประกันมีสิทธิหักลดหย่อน
                                </label>
                                <input type="text" />

                            </div>
                        </div>
                    </div>
                    <div className={styles.box1g}>
                        <div >
                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                                    บริษัทประกันสุขภาพ และประกันอุบัติเหตุที่คุ้มครองสุขภาพ
                                    <TooltipButton text={tooltip5}
                                        position="left" />
                                </label>
                                <input type="text" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                    กรมธรรม์ประกันชีวิตเลขที่(คู่สมรส)
                                </label>
                                <input type="text" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right  font-medium text-black-700 min-w-[250px] ">
                                    ค่าเบี้ยประกันมีสิทธิหักลดหย่อน
                                </label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.box1g}>
                        <div >
                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                                    บริษัทประกันชีวิตและประกันแบบสะสมทรัพย์(คู่สมรส)
                                    <TooltipButton text={tooltip6}
                                        position="left" />
                                </label>
                                <input type="text" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                    กรมธรรม์ประกันชีวิตเลขที่(คู่สมรส)
                                </label>
                                <input type="text" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right  font-medium text-black-700 min-w-[250px] ">
                                    ค่าเบี้ยประกันมีสิทธิหักลดหย่อน(คู่สมรส)
                                </label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* // ส่วนที่ 1  จบตรงนี่ */}
                <div className={styles.box1}>
                    <div className={styles.gridcontainer} style={{ paddingTop: '0px'}}>
                        <div className="text-right flex items-top justify-start gap-2 w-fit  ">
                            <label htmlFor="" className={styles.label1}>
                                ค่าอุปการะเลี้ยงดูบิดา มารดา
                            </label>
                            <TooltipButton text={tooltip7} position="top" />
                        </div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>บิดาตนเอง</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px]  ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>
                        <div ></div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>มารดาตนเอง</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px] ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>

                        <div ></div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>บิดาคู่สมรส</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px]  ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>
                        <div ></div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>มารดาคู่สมรส</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px] ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>

                    </div>
                    <div className={styles.gridcontainer} style={{ paddingTop: '0px' }}>
                        <div className="text-right flex items-top justify-start gap-2    ">
                            <label htmlFor="" className={styles.label1}>
                                ค่าเบี้ยประกันสุขภาพบิดา มารดา
                            </label>
                            <TooltipButton text={tooltip8} position="left" />
                        </div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>บิดาตนเอง</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px] ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>
                        <div ></div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>มารดาตนเอง</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px] ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>

                        <div ></div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>บิดาคู่สมรส</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px]  ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>
                        <div ></div>

                        <div className="flex items-center gap-2 mb-[5px]">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                className={styles.checkboxlarge}
                            />
                            <label htmlFor="" className={styles.labelcheckbox}>มารดาคู่สมรส</label>

                        </div>
                        <div className="grid grid-cols-2 mb-[5px] ">
                            <label htmlFor="" className={styles.label2}>
                                จำนวนเงินหักลดหย่อน (บาท)
                            </label>
                            <input
                                type="number"
                                id=""
                                name=""
                                className={styles.inputbox1}
                                min={0}
                                max={60000}
                            />
                        </div>

                    </div>


                    <div className={styles.box1g}>
                        <div style={{ marginTop: "20px", marginBottom: "20px" }} >
                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-right  flex gap-2 justify-end items-center  text-sm font-medium text-black-700">
                                    สถาบันการเงินให้กู้ยืมเพื่อชื้อหรือสร้างที่อยู่อาศัย
                                    <TooltipButton text={tooltip9}
                                        position="left" />
                                </label>
                                <input type="text" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right   font-medium text-black-700 min-w-[250px]">
                                    เลขที่สัญญากู้ยืม
                                </label>
                                <input type="text" />
                            </div>

                            <div className={styles.flexlabelinputg1}>
                                <label htmlFor="" className="text-sm text-right  font-medium text-black-700 min-w-[250px] ">
                                    ดอกเบี้ยเงินกู้ยืม (บาท)
                                </label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
}
