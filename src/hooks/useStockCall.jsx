import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProCatBrandSuccess, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getFirms = async () => {
    try {
      const { data } = await axios(`${BASE_URL}firms/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      // dispatch(firmsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url: "firms" }));
    } catch (error) {}
  };
  const getBrands = async () => {
    try {
      const { data } = await axios(`${BASE_URL}brands/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      // dispatch(brandsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url: "brands" }));
    } catch (error) {}
  };

  const getStockData = async (url) => {
    try {
      const { data } = await axios(`${BASE_URL}${url}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      // dispatch(brandsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url }));
    } catch (error) {}
  };

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`${url}/${id}`);

      getStockData(url);
    } catch (error) {}
  };

const postStockData =async (url,body)=>{

  try {
    await axiosWithToken.post(`${url}/` ,body);
    getStockData(url)
  } catch (error) {
    
  }

}
const putStockData =async (url,body)=>{

  try {
    await axiosWithToken.put(`${url}/${body._id}` ,body);
    getStockData(url)
  } catch (error) {
    
  }

}

const getProCatBrand = async () => {
 
  try {
    // const [a,b,c] = [1,2,3]
    const [products, brands, categories] = await Promise.all([
      axiosWithToken(`products`),
      axiosWithToken(`brands`),
      axiosWithToken(`categories`),
    ]);
    console.log(products)
    dispatch(getProCatBrandSuccess([products?.data?.data, brands?.data?.data, categories?.data?.data]))
  } catch (error) {
    dispatch(fetchFail());
  }
};
  return { getFirms, getBrands, getStockData, deleteStockData,postStockData,putStockData, getProCatBrand };
};

export default useStockCall;
