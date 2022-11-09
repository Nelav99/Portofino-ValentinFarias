import { Box, Container } from "@mui/material";
import React, {useState, useEffect} from "react";
import Api from '../assets/data.json';
import Item from "./Item";

export default function ListFeatures() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Api.slice(22, 30))
            }, 1000);
        })

        fetchData.then( res => {
            return setProducts(res)
        })
        .catch((err) => console.log(err))
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container id="product1" className="product-box">
            <Box className="pro-container" id="containerProd">
                <div id="cards">
                    {Products.map(product => {
                        return (
                            <div key={product.id} className="pro">
                                <Item key={product.id} id={product.id} name={product.name} image={product.image} price={product.price}/>
                            </div>
                        )
                    })}
                </div>
            </Box>
        </Container>
    )
}