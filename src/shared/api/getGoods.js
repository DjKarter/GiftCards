import {GET_ERROR} from "../const/strings";
import axios from "axios";

export const  getGoods =  async (outputData, setData, setLoading, setError) => {
    try {
        const data = await axios.post("https://sycret.ru/service/api/api/", JSON.stringify(outputData));
        let tempData = data.data.data.map(//много data не бывает
            (elem) =>{
                return(
                    ({ ID, NAME, PRICE, SUMMA, DISCOUNT, TABLENAME, PRIMARYKEY}) =>
                        ({ ID, NAME, PRICE, SUMMA, DISCOUNT, TABLENAME,PRIMARYKEY}))(elem);
            });
        setData(tempData);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
}
