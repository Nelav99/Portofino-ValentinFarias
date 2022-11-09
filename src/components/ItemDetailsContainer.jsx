import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from '../assets/data.json';
import ItemDetail from "./ItemDetail";

export default function ItemDetailsContainer() {
    const { idDetailsProduct } = useParams()

    const [Product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = new Promise((resolve, reject) => {
            setTimeout(() => {
                // eslint-disable-next-line eqeqeq
                resolve(Api.find((item) => item.id == idDetailsProduct))
            }, 2000);
        });

        fetchData.then( res => {
            setProduct(res)
        });
    }, [idDetailsProduct])

    return (
        <>
            <ItemDetail id={Product.id} name={Product.name} image={Product.image} price={Product.price} category={Product.category}/>
        </>
    )
}