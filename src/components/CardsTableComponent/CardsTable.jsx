import React, {useEffect, useState} from 'react';
import {API_KEY, GET_DATA, TEST_DATA} from "../../shared/const/strings";
import './styles.css';
import {getGoods} from "../../shared/api/getGoods";
import "regenerator-runtime/runtime";
import {Card} from "../CardComponent/Card";
import {IMG_SRC} from "../../shared/const/strings";
import {Loader} from "../LoaderComponent/Loader";
import {useNavigate} from "react-router-dom";


export const CardsTable = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate =  useNavigate();

    useEffect(() => {
        getGoods({ApiKey: API_KEY, MethodName: GET_DATA}, setData, setLoading, setError);
    }, []);

    if (loading) {
        return (
            <Loader/>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="adaptive">
            {data.reverse().map((item, index) => (
                <Card key={item.ID} image={IMG_SRC[index]} data={item}/>
            ))}
        </div>
    );
};
