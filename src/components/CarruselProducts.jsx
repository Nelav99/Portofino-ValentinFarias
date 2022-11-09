import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Api from '../assets/data.json';
import Item from './Item';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrusel.css";
import { Box } from "@mui/material";

export default function CarruselProducts() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = new Promise((resolve, reject) => {
            resolve(Api)
        });

        fetchData.then( res => {
            setProducts(res)
        });
    }, [])

    return (
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                tag="section"
                className="containerCarruselProducts"
            >
                <Box className="cards">
                    {Products.map((item) => {
                        return (
                            <SwiperSlide tag="div" className="pro" key={item.id}>
                                <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category}/>
                            </SwiperSlide>
                        )
                    })}
                </Box>
            </Swiper>
    );
}
