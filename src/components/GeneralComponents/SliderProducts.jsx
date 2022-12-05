import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {collection, getDocs, getFirestore} from "firebase/firestore";

export default function SliderProducts(onlyFor) {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, 'Products');
        getDocs(productsCollection).then((products) => {
            const data = products.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProducts(data.filter(data => data.for === onlyFor.only).slice(0, 21));
        })
    }, [onlyFor.only])

    return (
        <Container className="containerSwiper" key={[Navigation]} sx={{marginTop: '10px'}}>
            <Swiper key={[Navigation]} navigation={true} modules={[Navigation]} slidesPerView={3}
            spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} className="SliderProductsConfirm">
                {Products.map(item => {
                    return (
                        <SwiperSlide tag="div" className="productCard" key={item.id}>
                            <Box id="btnOpenPopUp" className="openProductDetails" key={item.id}>
                                <Link to={'/Product/' + item.id} target='_blank'>
                                    <img src={item.image} alt={item.name} className="principalProduct" />
                                    <Box className="description">
                                        <Typography className="productName" variant="h5" color="#222" sx={{fontSize: '18px', fontWeight: '400', padding: '5px 0', height: '58.02px'}}>
                                            {item.name}
                                        </Typography>
                                        <Box id="priceContainerFeatures" sx={{display: 'flex', justifyContent: 'center', alignContent: 'end'}}>
                                            <Typography variant="h6" color="initial">${item.price}</Typography>
                                            <Typography sx={{display: 'none'}} variant="h6" color="initial">{item.for}</Typography>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    );
}
