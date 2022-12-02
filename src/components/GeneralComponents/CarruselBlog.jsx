import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Box, Link, Typography } from "@mui/material";
import b1 from '../../assets/img/blog/b1.jpg';
import b2 from '../../assets/img/blog/b2.jpg';
import b3 from '../../assets/img/blog/b3.jpg';
import b4 from '../../assets/img/blog/b4.jpg';
import b5 from '../../assets/img/blog/b5.jpg';
import b6 from '../../assets/img/blog/b6.jpg';
import b7 from '../../assets/img/blog/b7.jpg';
import b8 from '../../assets/img/blog/b8.jpg';
import b9 from '../../assets/img/blog/b9.jpg';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrusel.css";

export default function CarruselBlog() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            tag="section"
            id="blog"
        >
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b1} alt="The Cotton-Jersey Zip-Up Hoodie" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">The Cotton-Jersey Zip-Up Hoodie</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b2} alt="Best Fragrances For Men" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">Best Fragrances For Men</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b3} alt="Must-Have Skater Men Items" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">Must-Have Skater Men Items</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b4} alt="" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">Fashion Bites: looks of streetstyle de Maje</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b5} alt="5 steps to your wardrobe change" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">5 steps to your wardrobe change</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b6} alt="Fashion trends worth trying this autumn/winter" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">Fashion trends worth trying this autumn/winter</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b7} alt="Autumn/winter 2022 trends for men" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">Autumn/ 2022 trends for men</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b8} alt="Best Combinations Accessories For Men's" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">Best Combinations Accessories For Men's</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
            <SwiperSlide className="blog-box">
                <Box className="blog-img">
                    <img src={b9} alt="What I leave the fashion of spring / summer" />
                </Box>
                <Box className="blog-details">
                    <Typography variant="h4" color="initial">What I leave the fashion of spring/summer</Typography>
                    <Typography variant="subtitle1" color="initial">Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</Typography>
                    <Link href='/Category/Blog' style={{cursor: 'pointer'}}>CONTINUE READING</Link>
                </Box>
            </SwiperSlide>
        </Swiper>
    );
}
