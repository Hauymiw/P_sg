import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

const Header = ({ HeaderText }) => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('loggedInUser');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    if (!formData) {
        return null;
    }

    return (
        <div>
            <div className="bg-white shadow-md p-2 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/images/S11_LOGO_500.png" width={30} height={30} alt="Logo" className="imgLogo " />
                    <div>
                        <p className="text-[16px] text-gray-600 pl-3">
                            {HeaderText || "S 11 GROUP "}
                            {formData.Fname} {formData.Lname} [{formData.EID}]
                        </p>
                    </div>
                </div>
                <button className="text-xl text-[#292D32]" onClick={() => window.location.href = "/formmainmenu"}>
                    <FiX size={28} />
                </button>
            </div>


            <hr className="border-t-1 border-gray-300 " />
        </div>
    );
};

export default Header;
