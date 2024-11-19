import React, { useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const Card = ({ image, data }) => {
  const navigate = useNavigate();

  const toFormPage = () => {
    navigate('/form', { state: data });
  };
  useEffect(() => {}, []);

  return (
    <div className="product-card">
      <img src={image} alt={data.NAME} className="product-image" />
      <h3 className="product-title">{data.NAME}</h3>
      <p className="product-price">{data.SUMMA} ₽</p>
      <button className="product-button" onClick={toFormPage}>
        Оформить
      </button>
    </div>
  );
};
