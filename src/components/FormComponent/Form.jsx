import React, {useEffect} from 'react';
import './styles.css';
import {useForm} from "react-hook-form";
import {Input} from "../InputComponent/Input";
import {useLocation, useNavigate} from "react-router-dom";

export const Form = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState:{errors}
    } = useForm();

    const submit = data => {
        console.log(data);
    }

    const error = data => {
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
                <form onSubmit={handleSubmit(submit, error)} className='form-data'>
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
                        <button>Обратно</button>
                        <button>Отправить</button>
                    </div>
                </form>
            </div>
        </>
    )
}
