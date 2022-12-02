import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SliderHero() {
    return (
        <>
            <Swiper slidesPerView={1} navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide className="SliderHero1">
                    <Container className="heroContainer textCenter" maxWidth="xl">
                        <Box className="textContainer">
                            <Box className="sliderContain">
                                <Typography variant="h4" color="initial" sx={{color: '#777', fontSize: 18, textTransform: 'capitalize', fontWeight: 700, lineHeight: 1, marginBottom: 0, textAlign: 'center'}}>
                                    Welcome to Fashion
                                </Typography>
                                <Typography variant="h1" color="initial" sx={{color: '#222', fontSize: 60, fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginBottom: 0, marginTop: 10}} className="titleHero">
                                    Men Fashion
                                </Typography>
                                <Link to={"/Category/ForMen"} className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium btn btn-solid css-1e6y48t-MuiButtonBase-root-MuiButton-root">shop now </Link>
                            </Box>
                        </Box>
                    </Container>
                </SwiperSlide>
                <SwiperSlide className="SliderHero2">
                    <Container className="heroContainer2 textCenter" maxWidth="xl">
                        <Box className="textContainer">
                            <Box className="sliderContain">
                                <Typography variant="h4" color="initial" sx={{color: '#777', fontSize: 18, textTransform: 'capitalize', fontWeight: 700, lineHeight: 1, marginBottom: 0, textAlign: 'center'}}>
                                    Welcome to Fashion
                                </Typography>
                                <Typography variant="h1" color="initial" sx={{color: '#222', fontSize: 60, fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginBottom: 0, marginTop: 10}} className="titleHero">
                                    Women Fashion
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
