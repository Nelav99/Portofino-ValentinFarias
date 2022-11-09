import React from "react";
import Item from "./Item";
import { useState } from "react";
import { useEffect } from "react";
import Api from '../assets/data.json';

export default function ItemList() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Api.slice(0, 4))
            }, 2000);
        })

        fetchData.then( res => {
            return setProducts(res)
        })
        .catch((err) => console.log(err))
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        Products.map(product => {
            return (
                <div key={product.id} className="pro">
                    <Item key={product.id} id={product.id} name={product.name} image={product.image} price={product.price}/>
                </div>
            )
        })
    )
}