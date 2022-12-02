import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemDetailsContainer() {
    const { idDetailsProduct } = useParams()

    const [Product, setProduct] = useState({})

    useEffect(() => {
        const db = getFirestore();

        const productDocument = doc(db, 'Products', idDetailsProduct);
        getDoc(productDocument).then((product) => {
            if(product.exists()) {
                setProduct({id: product.id, ...product.data()})
            }
        })
    }, [idDetailsProduct])
    return (
        <>
            <ItemDetail id={Product.id} name={Product.name} image={Product.image} price={Product.price} category={Product.category} only={Product.for} stock={Product.stock}/>
        </>
    )
}