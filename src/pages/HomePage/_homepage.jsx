import Banner from './Banner';
import MyHeader from '../../components/Header/Header';
import Info from './Info/Info';
import AdvanceHeading from './AdvanceHeading';
import HeadingListProduct from './HeadingListProduct';

const HomePage = () => {
    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeading />
            <HeadingListProduct />
        </>
    );
};

export default HomePage;
