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


    const tooltip1 = 'ลดหย่อนภาษีได้ 30% ของเงินได้ที่ต้องเสียภาษี แต่เมื่อรวมกับสิทธิลดหย่อนเพื่อการเกษียณอายุอื่นๆ แล้วต้องไม่เกิน 500,000 บาท';//ชื่อผู้ขายกองทุนรวมเพื่อการเลี้ยงชีพ
    const tooltip2 = 'ลดหย่อนภาษีได้ 30% ของเงินได้ที่ต้องเสียภาษี ตามที่จ่ายจริงสูงสุดไม่เกิน 200,000 บาท แต่เมื่อรวมกับสิทธิลดหย่อนเพื่อการเกษียณอายุอื่นๆ แล้วต้องไม่เกิน 500,000 บาท โดยได้สิทธิประโยชน์สำหรับลดหย่อนภาษี 5 ปี';//ชื่อผู้ขายกองทุนรวมเพื่อการออม [SSF]
    const tooltip3 = 'กองทุนลดหย่อนภาษีล่าสุด ที่เพิ่มสิทธิลดหย่อนภาษีได้ไม่เกิน 30% ของรายได้ และสูงสุดไม่เกิน 100,000 บาท โดยได้สิทธิประโยชน์สำหรับลดหย่อนภาษี 10 ปี นับตั้งแต่ปี 2566-2575';  //ชื่อผู้ขายกองทุนรวมไทยเพื่อความยั่งยืน [Thai ESG]
    const tooltip4 = 'ลดหย่อนภาษีได้ตามที่จ่ายจริงสูงสุดไม่เกิน 100,000 บาท';  //ชื่อผู้ขายหน่วยลงทุนธุรกิจ Social Enterprise [วิสาหกิจเพื่อสังคม]
    const tooltip5 = 'ลดหย่อนภาษีได้ตามที่จ่ายจริงสูงสุดไม่เกิน 13,200 บาท แต่เมื่อรวมกับสิทธิลดหย่อนเพื่อการเกษียณอายุอื่นๆ แล้วต้องไม่เกิน 500,000 บาท'; //จำนวนเงินลงทุนกองทุนการออมแห่งชาติ (กอช.)
    const tooltip6 = 'เงินบริจาคเพื่อการศึกษา กีฬา พัฒนาสังคม ประโยชน์สาธารณะและสถานพยาบาลของรัฐ ลดหย่อนได้ 2 เท่าของเงินบริจาคจริง สูงสุดไม่เกิน 10% ของเงินได้หลังหักค่าลดหย่อนภาษี'; // เงินบริจาคสนับสนุนการศึกษา
    const tooltip7 = 'ลดหย่อนได้ตามที่จ่ายจริง สูงสุดไม่เกิน 10% ของเงินได้หลังหักค่าลดหย่อนภาษี'; //เงินบริจาคเพื่อการกุศลสาธารณะ




    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formbox}>
                <div className="grid grid-cols-[55%_1fr]">
                    <div className={styles.box1}>

                        <div className={styles.box1g} >
                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700 whitespace-nowrap">
                                        ชื่อผู้ขายกองทุนรวมเพื่อการเลี้ยงชีพ [RMF]
                                    </label>

                                    <TooltipButton text={tooltip1}
                                        position="left" />
                                </div>
                                <input
                                    type="number"
                                    id=""
                                    name=""
                                    className=""
                                />
                            </div>

                            <div className={styles.flexlabelinput}>
                                <div className="text-right flex items-center justify-end gap-2">
                                    <label htmlFor=""
                                        className="text-sm font-medium text-black-700 whitespace-nowrap">
                                        จำนวนเงินลงทุน
                                    </label>
                                </div>
                                <input
                                    type="number"
                                    id=""
                                    name=""
                                    className=" "
                                />
                            </div>
                        </div>

                        <div>
                            <div className={styles.box1g} >
                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2 whitespace-nowrap">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            ชื่อผู้ขายกองทุนรวมเพื่อการออม [SSF]
                                        </label>

                                        <TooltipButton text={tooltip2}
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
                                            จำนวนเงินลงทุน
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
                        <div>
                            <div className={styles.box1g} >
                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2 whitespace-nowrap">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            ชื่อผู้ขายกองทุนรวมไทยเพื่อความยั่งยืน [Thai ESG]
                                        </label>

                                        <TooltipButton text={tooltip3}
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
                                            จำนวนเงินลงทุน
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
                        <div>
                            <div className={styles.box1g} >
                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2 whitespace-nowrap">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            ชื่อผู้ขายหน่วยลงทุนธุรกิจ Social Enterprise [วิสาหกิจเพื่อสังคม]
                                        </label>
                                        <TooltipButton text={tooltip4}
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
                                            จำนวนเงินลงทุน
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
                        <div>
                            <div className={styles.box1g} >
                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2 whitespace-nowrap">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            จำนวนเงินลงทุนกองทุนการออมแห่งชาติ (กอช.)
                                        </label>

                                        <TooltipButton text={tooltip5}
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

                        <div>
                            <div className={styles.box1g} >
                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2 whitespace-nowrap">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            เงินบริจาคสนับสนุนการศึกษา
                                        </label>

                                        <TooltipButton text={tooltip6}
                                            position="bottom" />
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

                        <div>
                            <div className={styles.box1g} >
                                <div className={styles.flexlabelinput}>
                                    <div className="text-right flex items-center justify-end gap-2 whitespace-nowrap">
                                        <label htmlFor=""
                                            className="text-sm font-medium text-black-700">
                                            เงินบริจาคเพื่อการกุศลสาธารณะ
                                        </label>

                                        <TooltipButton text={tooltip7}
                                            position="bottom" />
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
                    <div className={styles.box1}>
                    </div>
                    {/* ส่วนขวามือ  */}

                </div>
            </form>
        </div>
    );
};

export default TabSheet4;
