import {GET_ERROR} from "../const/strings";
import axios from "axios";

export const  getGoods =  async (outputData, setData, setLoading, setError) => {
    try {
        const data = await axios.post('https://sycret.ru/service/api/api/', JSON.stringify(outputData));
        setData(data.data.data.map(
            (elem) =>{
                return(({ ID, NAME, PRICE, SUMMA, DISCOUNT}) => ({ ID, NAME, PRICE, SUMMA, DISCOUNT}))(elem)
            })); //много data не бывает
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
}
