import axiosClient from './axiosClient';

const getProduct = async () => {
    const res = await axiosClient.get('/product?sortType=1&page=1&limit=10');

    return res.data;
};

export { getProduct };
