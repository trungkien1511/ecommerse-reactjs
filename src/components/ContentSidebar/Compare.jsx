import { HeaderSidebar } from './components/HeaderSidebar';
import { TfiReload } from 'react-icons/tfi';
import ItemProduct from './components/ItemProduct';

const Compare = () => {
    return (
        <div className='text-[#555]'>
            <HeaderSidebar icon={<TfiReload className='text-[30px]' />} title={`compare`} />
            <ItemProduct />
        </div>
    );
};

export default Compare;
