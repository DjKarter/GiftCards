import React, {useEffect} from 'react';
import './styles.css';
import {useNavigate} from "react-router-dom";

export const PaymentPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state) {
            navigate('/');
        }
    }, []);

    return (
       <div className='genius'>
           <p>Для оплаты приложите вашу карту к экрану...</p>
       </div>
    );
};
