import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BgBannerPrincipal from '../../assets/img/banner/BannerForWomen.jpg';
import BgPromotion from '../../assets/img/banner/bannerPromotion.jpg';
import Tops from '../../assets/img/forWomen/tops.jpg';
import Bottoms from '../../assets/img/forWomen/bottoms.jpg';
import PlusSize from '../../assets/img/forWomen/plusSize.jpg';
import Bags from '../../assets/img/forWomen/bags.jpg';
import Dresses from '../../assets/img/forWomen/dresses.jpg';
import Shoes from '../../assets/img/forWomen/shoes.jpg';
import BannerForWomen2 from '../../assets/img/banner/BannerForWomen2.jpg';
import BannerForWomen3 from '../../assets/img/banner/BannerForWomen3.jpg';
import BannerSelf from '../../assets/img/forWomen/bannerSelf.jpg';
import BestSelling from '../../assets/img/forWomen/bestSelling.jpg';
import NewIn from '../../assets/img/forWomen/newIn.jpg';
import Newsletter from '../HomePage/Newsletter';
import ServiceBanner from '../HomePage/ServiceBanner';
import Service from "../Service/Service";


export default function ForWomen() {
    return (
        <>
            <Box className="ContainerBannerForMen">
                <Link className="bannerForMen" to={'/Category/ForWomen/Sale'}>
                    <img src={BgBannerPrincipal} alt="Super Sale 85%" className="bannerSuperSaleForMen" />
                </Link>
                <Link className="bannerForMenMobile" to={'/Category/ForWomen/Sale'}>
                    <img src="https://imgaz1.chiccdn.com/os/202211/20221126001419_279.jpg.webp" alt="Super Sale 85%" className="bannerSuperSaleForMen" />
                </Link>
                <Link className="bannerForMen" to={'/Category/ForWomen/Sale'}>
                    <img src={BgPromotion} alt="Super Sale 85%" className="bannerPromotionForMen" />
                </Link>
            </Box>
            <Container className="containerCategorysMobile" sx={{textAlign: 'center', padding: '0 20px', marginBottom: '20px'}}>
                <Box className="categorysForMen">
                    <Box className="swiperSlide" sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Tops'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221124040853_235.jpg.webp" alt="Outwear" />
                                    <Typography className="textCategory" variant="body2" color="initial">Outwear</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Bottoms'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221124040927_964.jpg.webp" alt="Tops" />
                                    <Typography className="textCategory" variant="body2" color="initial">Tops</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Pants'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221124041035_495.jpg.webp" alt="Dresses" />
                                    <Typography className="textCategory" variant="body2" color="initial">Dresses</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/TwoPieces'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202212/20221202003942_522.jpg.webp" alt="Plus Size" />
                                    <Typography className="textCategory overflowCategory" variant="body2" color="initial">Plus Size</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Shoes'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221124041152_560.jpg.webp" alt="Hoodies" />
                                    <Typography className="textCategory" variant="body2" color="initial">Hoodies</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Shoes'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221124041303_224.jpg.webp" alt="Shoes" />
                                    <Typography className="textCategory" variant="body2" color="initial">Shoes</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Bags'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221124041335_482.jpg.webp" alt="Bags" />
                                    <Typography className="textCategory" variant="body2" color="initial">Bags</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Accesories'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221124041228_697.jpg.webp" alt="Accesories" />
                                    <Typography className="textCategory overflowCategory" variant="body2" color="initial">Accesories</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Container className="containerCategorys">
                <Box className="categorysForMen">
                    <Typography variant="h3" color="initial" className="titleCategorys">Shop By Category</Typography>
                    <Box className="swiperSlide" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Tops'}>
                                    <img className="imageSizeCategorys" src={Tops} alt="Tops" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Bottoms'}>
                                    <img className="imageSizeCategorys" src={Bottoms} alt="Bottoms" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/PlusSize'}>
                                    <img className="imageSizeCategorys" src={PlusSize} alt="PlusSize" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Bags'}>
                                    <img className="imageSizeCategorys" src={Bags} alt="Bags" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Dresses'}>
                                    <img className="imageSizeCategorys" src={Dresses} alt="Dresses" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForWomen/Shoes'}>
                                    <img className="imageSizeCategorys" src={Shoes} alt="Shoes" />
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box className="bannersPromotionals promotionalsForWomen">
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
                <Service only={"women"} start={0} end={4}/>
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
            <Box className="bannersDiscountMen" sx={{display: 'block', maxWidth: '100%', outline: 'none', position: 'relative', marginBottom: 0}}>
                <Box sx={{padding: '0 0 18px'}}>
                    <List sx={{padding: '0 8px', display: 'flex', flexWrap: 'wrap'}}>
                        <ListItem sx={{listStyle: 'none', padding: 0, margin: '0 5px', width: 'calc(50% - 10px)', position: "relative"}} >
                            <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/os/202211/20221107005438_985.jpg.webp" alt="big discount" />
                        </ListItem>
                        <ListItem sx={{listStyle: 'none', padding: 0, margin: '0 5px', width: 'calc(50% - 10px)', position: "relative"}} >
                            <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/os/202210/20221015011256_890.jpg.webp" alt="discount in montain clothes" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className="bannerNewArribalsMobile" sx={{display: 'block', maxWidth: '100%', outline: 'none', position: 'relative', marginBottom: 0}}>
                <Box sx={{padding: '0 13px 18px'}}>
                    <img style={{width: '388px', height: '124px', margin: 0, p: 0}} src="https://imgaz1.chiccdn.com/os/202207/20220707033545_776.jpg.webp" alt="New Arrivals" />
                </Box>
            </Box>
            <Box className="specialOffersMobile" sx={{marginBottom: '20px'}}>
                <Box sx={{paddingBottom: '18px', backgroundSize: '100%'}}>
                    <Typography variant="body2" color="initial" sx={{ padding: '0 13px', fontSize: '20px', fontWeight: 700, lineHeight: '54px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Special Offer:</Typography>
                    <List sx={{ padding: '0 8px', display: 'flex', flexWrap: 'wrap'}}>
                        <ListItem sx={{padding: '0 5px', width: '33.333%'}}>
                            <Box sx={{height: '100%', background: '#f1f1f1', display: 'flex', alignItems: 'center', position: 'relative'}}>
                                <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/thumb/grid/oaupload/newchic/images/1B/83/8c1281d3-73ac-47e6-85ba-2bd51c7b46d8.jpg.webp?s=163x217" alt="Hot Sale" />
                                <Typography variant="body2" color="initial" sx={{color: 'rgb(51, 51 ,51)', backgroundColor: 'rgb(235, 217, 194)', opacity: '.9', lineHeight: '30px', fontSize: '13px', padding: '0 8px', width: '100%', textAlign: 'center', bottom: 0, position: 'absolute'}} className="overflowCategory" >Hot Sale</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={{padding: '0 5px', width: '33.333%'}}>
                            <Box sx={{height: '100%', background: '#f1f1f1', display: 'flex', alignItems: 'center', position: 'relative'}}>
                                <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/thumb/grid/oaupload/newchic/images/10/C4/629222e7-33df-43f3-9021-c5db46b1e34d.jpg.webp?s=163x217" alt="Coats and Jackets" />
                                <Typography variant="body2" color="initial" sx={{color: 'rgb(51, 51 ,51)', backgroundColor: 'rgb(235, 217, 194)', opacity: '.9', lineHeight: '30px', fontSize: '13px', padding: '0 8px', width: '100%', textAlign: 'center', bottom: 0, position: 'absolute'}} className="overflowCategory" >Black Friday Sale shop by men</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={{padding: '0 5px', width: '33.333%'}}>
                            <Box sx={{height: '100%', background: '#f1f1f1', display: 'flex', alignItems: 'center', position: 'relative'}}>
                                <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/thumb/grid/oaupload/newchic/images/1C/B9/f1518f22-ac2f-4ef2-a77a-f38d2713cc88.jpg.webp?s=163x217" alt="kimono" />
                                <Typography variant="body2" color="initial" sx={{color: 'rgb(51, 51 ,51)', backgroundColor: 'rgb(235, 217, 194)', opacity: '.9', lineHeight: '30px', fontSize: '13px', padding: '0 8px', width: '100%', textAlign: 'center', bottom: 0, position: 'absolute'}} className="overflowCategory" >Women Dresses</Typography>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className="ContainerRecommendForYou" sx={{textAlign: 'center'}}>
                <Typography variant="h3" color="initial" className="subtitleCategorys">Recommend For You:</Typography>
                <Service only={"women"} start={5} end={21}/>
            </Box>
            <ServiceBanner />
            <Newsletter />
        </>
    )
}