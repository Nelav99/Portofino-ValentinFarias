import { Typography, Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import Api from "../assets/data.json";

export default function OtherProducts() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = new Promise((resolve, reject) => {
            return resolve(Api.slice(15, 19))
        });

        fetchData.then( res => {
            setProducts(res)
        });
    }, [])

    return (
        <>
            <Typography className="titleOtherProducts" variant="h3" color="initial">RELATED PRODUCTS:</Typography>
            <Container id="product1" className="otherProductsContainer">
                <Box className="pro-container" id="containerProd">
                    <Box id="cards" className="cardsOtherProducts">
                        {Products.map(product => {
                            return (<Box key={product.id} className="pro">
                                <Item key={product.id} id={product.id} name={product.name} image={product.image} price={product.price}/>
                            </Box>)
                        })}
                    </Box>
                </Box>
            </Container>
        </>
    )
}