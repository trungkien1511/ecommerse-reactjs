const Button = ({ content, href }) => {
    return (
        <div className='w-full bg-black text-white text-center px-10 py-3 rounded text-[14px] border hover:bg-transparent hover:text-black transition-all duration-300 ease-in-out;'>
            <a href={href}>{content}</a>
        </div>
    );
};

export default Button;
