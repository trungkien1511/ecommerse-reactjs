import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const InputCommon = ({ label, type, isRequired = false }) => {
    const [showPassWord, setShowPassWord] = useState(false);

    const isPassword = type === 'password';
    const typeOfPassword = type === 'password' && showPassWord ? 'text' : type;
    return (
        <div className='mb-[20px]'>
            <div className='mb-[5px]'>
                {label} {isRequired && <span>*</span>}
            </div>
            <button className='relative w-full'>
                <input
                    type={typeOfPassword}
                    name=''
                    id=''
                    className='w-full px-[17px] border leading-[2rem]'
                />
                {isPassword && (
                    <div
                        className='absolute right-2 bottom-2.5 cursor-pointer'
                        onClick={() => setShowPassWord(!showPassWord)}
                    >
                        {showPassWord ? <FiEye /> : <FiEyeOff />}
                    </div>
                )}
            </button>
        </div>
    );
};

export default InputCommon;
