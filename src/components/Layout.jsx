const MainLayout = ({ children }) => {
    return (
        <main className='flex justify-center'>
            <div className='w-[1250px]'>{children}</div>
        </main>
    );
};

export default MainLayout;
