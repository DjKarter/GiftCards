import React from 'react';
import './styles.css';

export const Card = ({image}) => {
    console.log(image)

    return (
        <div className="card">
            <div className="card_image_container">
                 <img src={image} className="card_image" alt={'image'}/>
             </div>
            <div className="card_content">
                <div className="card_text">
                    <div className="card_description">Сертификат на 50000</div>
                    <div className="card_price">Цена: 40000</div>
                </div>
                <button className="card_button">Оформить</button>
            </div>
        </div>
    )
}
