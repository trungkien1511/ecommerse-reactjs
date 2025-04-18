import Banner from './Banner';
import MyHeader from '../../components/Header/Header';
import Info from './Info/Info';
import AdvanceHeading from './AdvanceHeading';
import HeadingListProduct from './HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';
import PopularProduct from './PopularProduct';

const HomePage = () => {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProduct();
                setListProducts(data.contents || []);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeading />
            <HeadingListProduct data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />
        </>
    );
};

export default HomePage;
