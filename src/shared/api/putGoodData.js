import axios from "axios";


export const  getGoods =  async (outputData, setData, setLoading, setError) => {
    try {
        const data = await axios.post("https://sycret.ru/service/api/api/", JSON.stringify(outputData));
    } catch (error) {

    }
}
