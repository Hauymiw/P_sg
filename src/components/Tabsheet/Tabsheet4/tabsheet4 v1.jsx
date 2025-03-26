import React, { useState } from 'react';
import TooltipButton from "./../../Tooltip/btbtooltip";
import styles from './tabsheet4.module.css'

const TabSheet4 = () => {
    // สร้าง state สำหรับการเลือก checkbox และ input value
    const [fatherSelf, setFatherSelf] = useState(false);
    const [motherSelf, setMotherSelf] = useState(false);
    const [fatherSpouse, setFatherSpouse] = useState(false);
    const [motherSpouse, setMotherSpouse] = useState(false);

    const [fatherSelfDeduction, setFatherSelfDeduction] = useState('');
    const [motherSelfDeduction, setMotherSelfDeduction] = useState('');
    const [fatherSpouseDeduction, setFatherSpouseDeduction] = useState('');
    const [motherSpouseDeduction, setMotherSpouseDeduction] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            fatherSelf,
            motherSelf,
            fatherSpouse,
            motherSpouse,
            fatherSelfDeduction,
            motherSelfDeduction,
            fatherSpouseDeduction,
            motherSpouseDeduction
        });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formbox}>
                <div className="grid grid-cols-[40%_60%] ">
                    <div className={styles.box1}>
                        <div className={styles.gridcontainer}>
                            <div className="text-right flex items-top justify-start gap-2 w-fit  ">
                                <label htmlFor="" className={styles.label1}>
                                    ค่าเบี้ยประกันสุขภาพบิดา มารดา
                                </label>
                                <TooltipButton text="หักลดหย่อนส่วนตัวได้ คนละ 60,000 บาท" position="left" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={fatherSelf}
                                        onChange={(e) => setFatherSelf(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>บิดาตนเอง</label>
                                    <div className="flex ml-4">
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
                                            value={fatherSelfDeduction}
                                            onChange={(e) => setFatherSelfDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={motherSelf}
                                        onChange={(e) => setMotherSelf(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>มารดาตนเอง</label>
                                    <div className=" flex ml-4">
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
                                            value={motherSelfDeduction}
                                            onChange={(e) => setMotherSelfDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={motherSpouse}
                                        onChange={(e) => setMotherSpouse(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>มารดาคู่สมรส</label>
                                    <div className="flex ml-4">
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
                                            value={motherSpouseDeduction}
                                            onChange={(e) => setMotherSpouseDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={fatherSpouse}
                                        onChange={(e) => setFatherSpouse(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>บิดาคู่สมรส</label>
                                    <div className=" flex ml-4">
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
                                            value={fatherSpouseDeduction}
                                            onChange={(e) => setFatherSpouseDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.gridcontainer}>
                            <div className="text-right flex items-top justify-start gap-2">
                                <label htmlFor="" className={styles.label1}>
                                    ค่าอุปการเลี้ยงดูบิดา มารดา
                                </label>
                                <TooltipButton text="หักลดหย่อนส่วนตัวได้ คนละ 60,000 บาท" position="left" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={fatherSelf}
                                        onChange={(e) => setFatherSelf(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>บิดาตนเอง</label>
                                    <div className="flex ml-4">
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
                                            value={fatherSelfDeduction}
                                            onChange={(e) => setFatherSelfDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={motherSelf}
                                        onChange={(e) => setMotherSelf(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>มารดาตนเอง</label>
                                    <div className="flex ml-4">
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
                                            value={motherSelfDeduction}
                                            onChange={(e) => setMotherSelfDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={motherSpouse}
                                        onChange={(e) => setMotherSpouse(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>มารดาคู่สมรส</label>
                                    <div className="flex ml-4">
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
                                            value={motherSpouseDeduction}
                                            onChange={(e) => setMotherSpouseDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        className={styles.checkboxlarge}
                                        value={fatherSpouse}
                                        onChange={(e) => setFatherSpouse(e.target.checked)}
                                    />
                                    <label htmlFor="" className={styles.labelcheckbox}>บิดาคู่สมรส</label>
                                    <div className="flex ml-4">
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
                                            value={fatherSpouseDeduction}
                                            onChange={(e) => setFatherSpouseDeduction(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ส่วนขวามือ  */}
                    <div className={styles.box1}>

                        <div className={styles.box1g} >
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700 whitespace-nowrap">
                                        เงินบริจาคสนับสนุนการศึกษา
                                    </label>

                                    <TooltipButton text="เงินบริจาคสนับสนุนการศึกษา เป็นเงินที่จ่ายเป็นค่าใช้จ่ายสำหรับจัดหาหรือสร้างอาคารหรือที่ดินให้สถานศึกษา หรือจัดหาวัสดุอุปกรณ์เพื่อการศึกษา แบบเรียน ตำรา ตลอดจนวัสดุอื่นๆที่เกี่ยวข้องกับการศึกษา หักลดหย่อนได้ 2 เท่าของจำนวนเงินที่จ่ายจริงแต่ไม่เกินร้อยละ 10 ของเงินคงเหลือหลักหักค่าใช้จ่ายและค่าลดหย่อนอื่นๆ"
                                        position="left" />
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

                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700 whitespace-nowrap">
                                        เงินบริจาคเพื่อการกุศลสาธารณะ
                                    </label>

                                    <TooltipButton text="เงินบริจาคต้องเป็นเงินบริจาคเพื่อการกุศลสาธารณะ หักลดหย่อนได้ตามจริงแต่ไม่เกินร้อยละ 10 ของเงินคงเหลือหลังหักค่าใช้จ่ายและค่าลดหย่อนอื่น ๆ"
                                        position="left" />
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

                        <div>
                            <div className={styles.box1g} >
                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2 whitespace-nowrap">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            บริษัทผู้รับประกัน(แบบบำนาญ)
                                        </label>

                                        <TooltipButton text="หักลดหย่อนได้ ตามที่จ่ายเงิน แต่ไม่เกิน 15% ของเงินได้ก่อนเสียภาษี และไม่เกิน 200,000 บาท (เมื่อรวมกับ RMF และกองทุนสำรองเลี้ยงชีพต้องไม่เกิน 500,000 บาท)"
                                            position="left" />
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

                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            กรมธรรม์ประกันชีวิตเลขที่
                                        </label>


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

                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700 whitespace-nowrap">
                                            เบี้ยประกันที่มีสิทธิหักลดหย่อน
                                        </label>


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
                        </div>
                        <div className={styles.box1g} >
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700 whitespace-nowrap">
                                        กองทุนออมแห่งชาติ
                                    </label>

                                    <TooltipButton text="หักลดหย่อนตามที่จ่ายจริง แต่ไม่เกิน 13,200 บาท เมื่อรวมกับ RMF"
                                        position="left" />
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
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TabSheet4;
