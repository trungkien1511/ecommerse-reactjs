const Button = ({ content, href }) => {
    return (
        <div className='bg-black text-white w-fit px-10 py-3 rounded text-[14px] border hover:bg-transparent hover:text-black transition-all duration-300 ease-in-out;'>
            <a href={href}>Read More</a>
        </div>
    );
};

export default Button;
