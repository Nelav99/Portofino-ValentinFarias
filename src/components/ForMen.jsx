import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BgBannerPrincipal from '../assets/img/banner/BannerForMen.jpg';
import BgPromotion from '../assets/img/banner/bannerPromotion.jpg';
import Tops from '../assets/img/forMen/tops.jpg';
import Bottoms from '../assets/img/forMen/bottoms.jpg';
import TwoPieces from '../assets/img/forMen/twoPieces.jpg';
import Bags from '../assets/img/forMen/bags.jpg';
import Accesories from '../assets/img/forMen/accesories.jpg';
import Shoes from '../assets/img/forMen/shoes.jpg';
import RetroBanner from '../assets/img/banner/BannerForMen4.jpg';
import WarmBanner from '../assets/img/banner/BannerForMen3.jpg';
import PromotionBanner from '../assets/img/banner/BannerForMen2.jpg';
import Api from '../assets/data.json';
import Item from './Item';
import Newsletter from './Newsletter';
import ServiceBanner from './ServiceBanner';


export default function ForMen() {
    const [Products, setProducts] = useState([])
    const [Recommend, setRecommend] = useState([])

    useEffect(() => {
        const fetchData = new Promise((resolve, reject) => {
            resolve(Api)
        });

        fetchData.then( res => {
            setProducts(res.slice(17, 21))
            setRecommend(res.slice(0, 20))
        });
    }, [])
    return (
        <>
            <Box className="ContainerBannerForMen">
                <Link className="bannerForMen" to={'/Category/ForMen/Sale'}>
                    <img src={BgBannerPrincipal} alt="Super Sale 85%" className="bannerSuperSaleForMen" />
                </Link>
                <Link className="bannerForMen" to={'/Category/ForMen/Sale'}>
                    <img src={BgPromotion} alt="Super Sale 85%" className="bannerPromotionForMen" />
                </Link>
            </Box>
            <Container className="containerCategorys">
                <Box className="categorysForMen">
                    <Typography variant="h3" color="initial" className="titleCategorys">Shop By Category</Typography>
                    <Box className="swiperSlide" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Tops'}>
                                    <img className="imageSizeCategorys" src={Tops} alt="Tops" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Bottoms'}>
                                    <img className="imageSizeCategorys" src={Bottoms} alt="Bottoms" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/TwoPieces'}>
                                    <img className="imageSizeCategorys" src={TwoPieces} alt="TwoPieces" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Bags'}>
                                    <img className="imageSizeCategorys" src={Bags} alt="Bags" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Accesories'}>
                                    <img className="imageSizeCategorys" src={Accesories} alt="Accesories" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Shoes'}>
                                    <img className="imageSizeCategorys" src={Shoes} alt="Shoes" />
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box className="bannersPromotionals">
                <Box className="retroBanner">
                    <Link to={'/Category/ForMen/Retro'}>
                        <img className="promotionImage" src={RetroBanner} alt='Retro Style up to 70% off'/>
                    </Link>
                </Box>
                <Box className="warmBanner">
                    <Link to={'/Category/ForMen/Warm'}>
                        <img className="promotionImage" src={WarmBanner} alt='Warm Embrace up to 50% off'/>
                    </Link>
                </Box>
            </Box>
            <Box className="containerShopByDeals" sx={{textAlign: 'center'}}>
                <Typography variant="h3" color="initial" className="subtitleCategorys">Shop By Deals:</Typography>
                <Container id="product1" className="productContainerShopDeals">
                    <Box className="pro-container" id="containerProd">
                        <Box id="cards">
                            {
                                Products.map((item, i) => {
                                    return (
                                        <Box className="pro" key={i}>
                                            <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box className="banner50Off">
                <Link to={'/Category/ForMen/Warm'}>
                    <img className="promotionImage" src={PromotionBanner} alt="50% Off" />
                </Link>
            </Box>
            <Box className="ContainerRecommendForYou" sx={{textAlign: 'center'}}>
                <Typography variant="h3" color="initial" className="subtitleCategorys">Recommend For You:</Typography>
                <Container id="product1" className="productContainerShopDeals">
                    <Box className="pro-container" id="containerProd">
                        <Box id="cards">
                            {
                                Recommend.map((item, i) => {
                                    return (
                                        <Box className="pro" key={i}>
                                            <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Container>
            </Box>
            <ServiceBanner />
            <Newsletter />
        </>
    )
}