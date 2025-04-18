import ProductItem from '../../components/ProductItem';

const PopularProduct = ({ data }) => {
    return (
        <div className='w-[1260px] mx-auto mt-[15px]'>
            <div className='flex justify-between items-center flex-wrap'>
                {data.map((item) => (
                    <ProductItem
                        key={item.id}
                        src={item.images[0]}
                        preSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;
