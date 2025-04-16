import fbIcon from '@icons/svgs/fb.svg';
import insIcon from '@icons/svgs/ins.svg';
import ytbIcon from '@icons/svgs/ytb.svg';
import reloadIcon from '@icons/svgs/reload.svg';

const BoxIcon = ({ type, href }) => {
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ytbIcon;
            case 'reload':
                return reloadIcon;
        }
    };
    return (
        <div className='bg-black rounded-2xl w-[26px] h-[26px] flex justify-center items-center'>
            <img className='w-[15px] h-[15px]' src={handleRenderIcon(type)} alt={href} />
        </div>
    );
};

export default BoxIcon;
