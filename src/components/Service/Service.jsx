import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Item from "../Items/Item";
import {collection, getDocs, getFirestore} from "firebase/firestore";

export default function Service({only, start, end}) {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, 'Products');
        getDocs(productsCollection).then((products) => {
            const data = products.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            if(only === "" || only === undefined) {
                setProducts(data.slice(start, end));
            } else if(only === "men" || only === "women") {
                setProducts(data.filter(data => data.for === only).slice(start, end));
            }else {
                setProducts(data.filter(data => data.for === only).slice(start, end));
            }
        })
    }, [end, only, start])

    return (
        <>
            <Container id="product1" className="productContainerShopDeals">
                <Box className="pro-container" id="containerProd">
                    <Box id="cards">
                        {
                            Products.map((item, i) => {
                                return (
                                    <Box className="pro" id={'num' + i} key={i}>
                                        <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} only={item.for}/>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Container>
        </>
    )
}