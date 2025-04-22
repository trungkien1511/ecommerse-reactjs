import dataInfo from './constants';

const Info = () => {
    return (
        <div className='Info'>
            <div className='flex bg-[#555] text-white w-[1250px] py-[20px] px-[55px] mx-auto mt-[-70px]'>
                {dataInfo.map((item, index) => (
                    <div key={index} className='flex items-center space-x-5 p-[15px]'>
                        <div>
                            <img className='w-[40px] h-[40px]' src={item.src} alt='' />
                        </div>
                        <div>
                            <div className='mb-[10px]'>
                                <span className='text-[17px]'>{item.title}</span>
                            </div>
                            <p className='text-[16px] text-gray-400'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Info;
