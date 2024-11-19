import axios from "axios";


export const  putGoodData =  async (outputData, setLoading) => {
    try {
        const data = await axios.post("https://sycret.ru/service/api/api/", JSON.stringify(outputData));
        setLoading(false);
        localStorage.setItem('putStatus', JSON.stringify({status: 'ok'}))
    } catch (error) {
        alert('Ошибка при отправке данных');
        localStorage.setItem('putStatus', JSON.stringify({status: 'error'}))
    }
}
