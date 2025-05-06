export const HeaderSidebar = ({ icon, title }) => {
    return (
        <div className='flex flex-col items-center gap-[10px] mb-[15px]'>
            {icon}
            <div className='uppercase '>{title}</div>
        </div>
    );
};
