import React, {useEffect, useState} from 'react';
import './styles.css';
import {useForm} from "react-hook-form";
import {Input} from "../InputComponent/Input";
import {useLocation, useNavigate} from "react-router-dom";
import {API_KEY, PUT_DATA} from "../../shared/const/strings";

export const Form = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        watch,
        formState:{errors}
    } = useForm();

    const onSubmit = data => {
        const outPutData = {
            ApiKey: API_KEY,
            MethodName: PUT_DATA,
            Id: location.state.ID,
            TableName: location.state.TABLENAME,
            PrimaryKey: location.state.PRIMARYKEY,
            Price: location.state.PRICE,
            Summa: location.state.SUMMA,
            ClientName: location.state.CLIENTNAME,
            Phone: location.state.PHONE,
            Email: location.state.EMAIL,
            UseDelivery: 0,
        }
        console.log(data);
    }

    const onError = data => {
        console.log('ошибка' + data);
    }


    useEffect(() => {
        if (!location.state) {
            navigate('/');
        }
        console.log(location.state);
    }, []);


    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit, onError)} className='form-data'>
                    <h2>Контактная форма</h2>
                    <Input
                        name={"name"}
                        labelText={"Имя"}
                        type={"text"}
                        placeholder={"Введите ваше имя"}
                        register={register}
                        errors={errors}
                        rules={{required:true, maxLength:20 }}
                    />
                    <Input
                        name={"phone"}
                        labelText={"Телефон"}
                        type={"phone"}
                        placeholder={"+7 (___) ___-__-__"}
                        register={register}
                        errors={errors}
                        rules={{required:true, pattern : /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}}
                    />
                    <Input
                        name={"email"}
                        labelText={"Почта"}
                        type={"email"}
                        placeholder={"example@mail.ru"}
                        register={register}
                        errors={errors}
                        rules={{required:true, maxLength:30 }}
                    />
                    <div className="button-group">
                        <button onClick={()=> navigate('/')}>Обратно</button>
                        <button type="submit">Отправить</button>
                    </div>

                </form>
            </div>
        </>
    )
}
