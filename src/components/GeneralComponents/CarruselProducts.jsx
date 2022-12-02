import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from '../Items/Item';
import { Box } from "@mui/material";
import {collection, getDocs, getFirestore} from "firebase/firestore";

export default function CarruselProducts(only) {
    const [Products, setProducts] = useState([])
    const generate = only.only;

    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, 'Products');
        getDocs(productsCollection).then((products) => {
            const data = products.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            if(generate === "" || generate === undefined) {
                setProducts(data.slice(5, 33));
            } else {
                setProducts(data.filter(data => data.for === generate).slice(5, 21));
            }
        })
    }, [generate])

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
                style={{paddingBottom: '48px'}}
            >
                <Box className="cards">
                    {Products.map((item) => {
                        return (
                            <SwiperSlide tag="div" className="pro" key={item.id}>
                                <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} only={item.for}/>
                            </SwiperSlide>
                        )
                    })}
                </Box>
            </Swiper>
    );
}
