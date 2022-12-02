import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SliderShop() {
    return (
        <>
            <Swiper slidesPerView={1} navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide className="SliderShop1">
                    <Container className="heroShop textCenter" maxWidth="xl">
                        <Box className="textContainer" sx={{position: 'absolute', top: '285px', left: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Box className="sliderContain">
                                <Typography variant="h4" color="initial" sx={{color: '#BA8366', fontSize: 18, textTransform: 'uppercase', fontWeight: 700, lineHeight: 1, letterSpacing: 2, marginBottom: 0, textAlign: 'center'}}>
                                    Fashion Trends
                                </Typography>
                                <Typography variant="h1" color="initial" sx={{color: '#333', fontSize: 60, fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, margin: '10px 0 !important'}} className="titleShopHero">
                                    For Men's
                                </Typography>
                                <Link to={"/Category/ForMen"} className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium btn btn-solid css-1e6y48t-MuiButtonBase-root-MuiButton-root">shop now </Link>
                            </Box>
                        </Box>
                    </Container>
                </SwiperSlide>
                <SwiperSlide className="SliderShop2">
                    <Container className="heroShop2 textCenter" maxWidth="xl">
                        <Box className="textContainerWomen" sx={{position: 'absolute', top: '285px', left: '210px !important', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Box className="sliderContain">
                                <Typography variant="h4" color="initial" sx={{color: '#BA8366', fontSize: 18, textTransform: 'uppercase', fontWeight: 700, lineHeight: 1,  letterSpacing: 2, marginBottom: 0, textAlign: 'center'}}>
                                    Fashion Trends
                                </Typography>
                                <Typography variant="h1" color="initial" sx={{color: '#fff', fontSize: 60, fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginBottom: 0, marginTop: 10}} className="titleShopHero">
                                    For Women's
                                </Typography>
                                <Link to={"/Category/ForWomen"} className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium btn btn-solid css-1e6y48t-MuiButtonBase-root-MuiButton-root">shop now </Link>
                            </Box>
                        </Box>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
