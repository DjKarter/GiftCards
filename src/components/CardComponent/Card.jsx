import React from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";

export const Card = ({ image, title, price }) => {
    const navigate = useNavigate();

    const toFormPage = () => {
        navigate('/form', {state:{1:'lel'}})
    }


    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-price">{price} ₽</p>
                <button className="product-button" onClick={toFormPage}>
                    Оформить
                </button>
        </div>
    );
};
