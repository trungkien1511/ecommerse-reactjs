const ProductItem = ({ src, preSrc, name, price }) => {
    console.log(preSrc);
    return (
        <div className='space-y-2'>
            <div className='relative w-[295px] h-[353px] group'>
                <img
                    src={src}
                    alt=''
                    className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0'
                />
                <img
                    src={preSrc}
                    alt=''
                    className='absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                />
            </div>
            <div>
                <h1>{name}</h1>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default ProductItem;
