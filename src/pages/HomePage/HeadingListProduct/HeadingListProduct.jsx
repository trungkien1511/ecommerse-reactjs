import CountdownTimer from '@components/CountdownTimer';
import ProductItem from '../../../components/ProductItem';

const HeadingListProduct = ({ data }) => {
    return (
        <div className='max-w-[1260px] h-[408px] mx-auto'>
            <div className='flex gap-6 h-full'>
                <div className='w-[50%] h-full bg-cover bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/photo-of-man-wearing-white-hoodie-5474310.jpeg)] flex flex-col justify-center items-center space-y-2'>
                    <CountdownTimer targetDateString='2025-12-31T23:59:59' />
                    <div>
                        <h2 className='text-[28px]'>The classics make a comeback</h2>
                    </div>
                    <div>
                        <button className='button_highlight'>Buy now</button>
                    </div>
                </div>

                <div className='flex justify-between w-[50%] h-full'>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            preSrc={item.images[2]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeadingListProduct;
