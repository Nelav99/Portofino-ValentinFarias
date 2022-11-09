import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BgBannerPrincipal from '../assets/img/banner/BannerForWomen.jpg';
import BgPromotion from '../assets/img/banner/bannerPromotion.jpg';
import Tops from '../assets/img/forWomen/tops.jpg';
import Bottoms from '../assets/img/forWomen/bottoms.jpg';
import PlusSize from '../assets/img/forWomen/plusSize.jpg';
import Bags from '../assets/img/forWomen/bags.jpg';
import Dresses from '../assets/img/forWomen/dresses.jpg';
import Shoes from '../assets/img/forWomen/shoes.jpg';
import BannerForWomen2 from '../assets/img/banner/BannerForWomen2.jpg';
import BannerForWomen3 from '../assets/img/banner/BannerForWomen3.jpg';
import BannerSelf from '../assets/img/forWomen/bannerSelf.jpg';
import BestSelling from '../assets/img/forWomen/bestSelling.jpg';
import NewIn from '../assets/img/forWomen/newIn.jpg';
import Api from '../assets/data.json';
import Item from './Item';
import Newsletter from './Newsletter';
import ServiceBanner from './ServiceBanner';


export default function ForWomen() {
    const [Products, setProducts] = useState([])
    const [Recommend, setRecommend] = useState([])

    useEffect(() => {
        const fetchData = new Promise((resolve, reject) => {
            resolve(Api)
        });

        fetchData.then( res => {
            setProducts(res.slice(32, 36))
            setRecommend(res.slice(23, 43))
        });
    }, [])
    return (
        <>
            <Box className="ContainerBannerForMen">
                <Link className="bannerForMen" to={'/Category/ForWomen/Sale'}>
                    <img src={BgBannerPrincipal} alt="Super Sale 85%" className="bannerSuperSaleForMen" />
                </Link>
                <Link className="bannerForMen" to={'/Category/ForWomen/Sale'}>
                    <img src={BgPromotion} alt="Super Sale 85%" className="bannerPromotionForMen" />
                </Link>
            </Box>
            <Container className="containerCategorys">
                <Box className="categorysForMen">
                    <Typography variant="h3" color="initial" className="titleCategorys">Shop By Category</Typography>
                    <Box className="swiperSlide" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Tops'}>
                                    <img className="imageSizeCategorys" src={Tops} alt="Tops" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Bottoms'}>
                                    <img className="imageSizeCategorys" src={Bottoms} alt="Bottoms" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/PlusSize'}>
                                    <img className="imageSizeCategorys" src={PlusSize} alt="PlusSize" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Bags'}>
                                    <img className="imageSizeCategorys" src={Bags} alt="Bags" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Dresses'}>
                                    <img className="imageSizeCategorys" src={Dresses} alt="Dresses" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorys" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Shoes'}>
                                    <img className="imageSizeCategorys" src={Shoes} alt="Shoes" />
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box className="bannersPromotionals">
                <Box className="BannerForWomen">
                    <Link to={'/Category/ForWomen/Retro'}>
                        <img className="promotionImage" src={BannerForWomen2} alt='Retro Style up to 70% off'/>
                    </Link>
                </Box>
                <Box className="BannerForWomen">
                    <Link to={'/Category/ForWomen/Warm'}>
                        <img className="promotionImage" src={BannerForWomen3} alt='Warm Embrace up to 50% off'/>
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
            <Box className="containerFeaturedBrandsSpotlight">
                <Typography variant="h3" color="initial" className="subtitleCategorys">Featured Brands Spotlight:</Typography>
                <Box className="containerSelfContent">
                    <img src={BannerSelf} alt="banner Self" className="selfImage"/>
                    <Box className="btnSelfBrand">
                        <Link to={'/Category/ForWomen/BestSelling'}>
                            <img src={BestSelling} alt="Best Selling" className="imageSelfBrand"/>
                        </Link>
                    </Box>
                    <Box className="btnSelfBrand">
                        <Link to={'/Category/ForWomen/NewIn'}>
                            <img src={NewIn} alt="New In" className="imageSelfBrand"/>
                        </Link>
                    </Box>
                </Box>
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