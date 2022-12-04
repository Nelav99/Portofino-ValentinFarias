import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from '../../assets/img/banner/BannerForMen.jpg';
import PromotionBanner from '../../assets/img/banner/BannerForMen2.jpg';
import WarmBanner from '../../assets/img/banner/BannerForMen3.jpg';
import RetroBanner from '../../assets/img/banner/BannerForMen4.jpg';
import BgPromotion from '../../assets/img/banner/bannerPromotion.jpg';
import Accesories from '../../assets/img/forMen/accesories.jpg';
import Bags from '../../assets/img/forMen/bags.jpg';
import Bottoms from '../../assets/img/forMen/bottoms.jpg';
import Shoes from '../../assets/img/forMen/shoes.jpg';
import Tops from '../../assets/img/forMen/tops.jpg';
import TwoPieces from '../../assets/img/forMen/twoPieces.jpg';
import Newsletter from '../HomePage/Newsletter';
import ServiceBanner from '../HomePage/ServiceBanner';
import Service from "../Service/Service";

export default function ForMen() {
    return (
        <>
            <Box className="ContainerBannerForMen">
                <Link className="bannerForMen" to={'/Category/ForMen/Sale'}>
                    <img src={HeroBanner} alt="Super Sale 85%" className="bannerSuperSaleForMen" />
                </Link>
                <Link className="bannerForMenMobile" to={'/Category/ForMen/Sale'}>
                    <img src="https://imgaz1.chiccdn.com/os/202211/20221126001419_279.jpg.webp" alt="Super Sale 85%" className="bannerSuperSaleForMen" />
                </Link>
                <Link className="bannerForMen bannerDiscounts" to={'/Category/ForMen/Sale'}>
                    <img src={BgPromotion} alt="Super Sale 85%" className="bannerPromotionForMen" />
                </Link>
            </Box>
            <Container className="containerCategorysMobile" sx={{textAlign: 'center', padding: '0 20px', marginBottom: '20px'}}>
                <Box className="categorysForMen">
                    <Box className="swiperSlide" sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Tops'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123020321_431.jpg.webp" alt="Tops" />
                                    <Typography className="textCategory" variant="body2" color="initial">Shirts</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Bottoms'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123020300_279.jpg.webp" alt="Bottoms" />
                                    <Typography className="textCategory" variant="body2" color="initial">T-Shirts</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Pants'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123020247_803.jpg.webp" alt="Pants" />
                                    <Typography className="textCategory" variant="body2" color="initial">Pants</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/TwoPieces'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123020217_283.jpg.webp" alt="TwoPieces" />
                                    <Typography className="textCategory overflowCategory" variant="body2" color="initial">Two Pieces</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Shoes'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123023609_912.jpg.webp" alt="Hoodies" />
                                    <Typography className="textCategory" variant="body2" color="initial">Hoodies</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Shoes'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123023626_396.jpg.webp" alt="Shoes" />
                                    <Typography className="textCategory" variant="body2" color="initial">Shoes</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Bags'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123023639_754.jpg.webp" alt="Bags" />
                                    <Typography className="textCategory" variant="body2" color="initial">Bags</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Accesories'}>
                                    <img className="imageSizeCategorys" src="https://imgaz1.chiccdn.com/os/202211/20221123023648_173.jpg.webp" alt="Accesories" />
                                    <Typography className="textCategory overflowCategory" variant="body2" color="initial">Accesories</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Container className="containerCategorys">
                <Box className="categorysForMen" sx={{width: '100%'}}>
                    <Typography variant="h3" color="initial" className="titleCategorys">Shop By Category</Typography>
                    <Box className="swiperSlide" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Tops'}>
                                    <img className="imageSizeCategorys" src={Tops} alt="Tops" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Bottoms'}>
                                    <img className="imageSizeCategorys" src={Bottoms} alt="Bottoms" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/TwoPieces'}>
                                    <img className="imageSizeCategorys" src={TwoPieces} alt="TwoPieces" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Bags'}>
                                    <img className="imageSizeCategorys" src={Bags} alt="Bags" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
                            <Box className="padding">
                                <Link to={'/Category/ForMen/Accesories'}>
                                    <img className="imageSizeCategorys" src={Accesories} alt="Accesories" />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="containerCategorysIndividual" sx={{width: '216px'}}>
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
                <Service only={"men"} start={17} end={21}/>
            </Box>
            <Box className="banner50Off">
                <Link to={'/Category/ForMen/Warm'}>
                    <img className="promotionImage" src={PromotionBanner} alt="50% Off" />
                </Link>
            </Box>
            <Box className="bannersDiscountMen" sx={{display: 'block', maxWidth: '100%', outline: 'none', position: 'relative', marginBottom: 0}}>
                <Box sx={{padding: '0 0 18px'}}>
                    <List sx={{padding: '0 8px', display: 'flex', flexWrap: 'wrap'}}>
                        <ListItem sx={{listStyle: 'none', padding: 0, margin: '0 5px', width: 'calc(50% - 10px)', position: "relative"}} >
                            <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/os/202212/20221202001057_389.jpg.webp" alt="big discount" />
                        </ListItem>
                        <ListItem sx={{listStyle: 'none', padding: 0, margin: '0 5px', width: 'calc(50% - 10px)', position: "relative"}} >
                            <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/os/202212/20221201003259_889.jpg.webp" alt="discount in montain clothes" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className="bannerNewArribalsMobile" sx={{display: 'block', maxWidth: '100%', outline: 'none', position: 'relative', marginBottom: 0}}>
                <Box sx={{padding: '0 13px 18px'}}>
                    <img style={{width: '388px', height: '124px', margin: 0, p: 0}} src="https://imgaz1.chiccdn.com/os/202212/20221201000129_391.jpg.webp" alt="New Arrivals" />
                </Box>
            </Box>
            <Box className="specialOffersMobile" sx={{marginBottom: '20px'}}>
                <Box sx={{paddingBottom: '18px', backgroundSize: '100%'}}>
                    <Typography variant="body2" color="initial" sx={{ padding: '0 13px', fontSize: '20px', fontWeight: 700, lineHeight: '54px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Special Offer:</Typography>
                    <List sx={{ padding: '0 8px', display: 'flex', flexWrap: 'wrap'}}>
                        <ListItem sx={{padding: '0 5px', width: '33.333%'}}>
                            <Box sx={{height: '100%', background: '#f1f1f1', display: 'flex', alignItems: 'center', position: 'relative'}}>
                                <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/thumb/grid/oaupload/newchic/images/F4/12/98c355d3-3dfc-4ec8-9ccc-fc07ce5970b0.jpg.webp?s=163x217" alt="T-shirts" />
                                <Typography variant="body2" color="initial" sx={{color: 'rgb(51, 51 ,51)', backgroundColor: 'rgb(235, 217, 194)', opacity: '.9', lineHeight: '30px', fontSize: '13px', padding: '0 8px', width: '100%', textAlign: 'center', bottom: 0, position: 'absolute'}} className="overflowCategory" >Men-Fashion</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={{padding: '0 5px', width: '33.333%'}}>
                            <Box sx={{height: '100%', background: '#f1f1f1', display: 'flex', alignItems: 'center', position: 'relative'}}>
                                <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/thumb/grid/oaupload/newchic/images/8F/D4/60161e07-afd9-46cf-b0c0-fdc4b64eb265.jpg.webp?s=163x217" alt="Coats and Jackets" />
                                <Typography variant="body2" color="initial" sx={{color: 'rgb(51, 51 ,51)', backgroundColor: 'rgb(235, 217, 194)', opacity: '.9', lineHeight: '30px', fontSize: '13px', padding: '0 8px', width: '100%', textAlign: 'center', bottom: 0, position: 'absolute'}} className="overflowCategory" >Coats&Jackets</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={{padding: '0 5px', width: '33.333%'}}>
                            <Box sx={{height: '100%', background: '#f1f1f1', display: 'flex', alignItems: 'center', position: 'relative'}}>
                                <img style={{width: '100%'}} src="https://imgaz1.chiccdn.com/thumb/grid/oaupload/newchic/images/01/9F/4519f77e-5012-43c6-8785-baaf33bcf8ca.jpg.webp?s=163x217" alt="kimono" />
                                <Typography variant="body2" color="initial" sx={{color: 'rgb(51, 51 ,51)', backgroundColor: 'rgb(235, 217, 194)', opacity: '.9', lineHeight: '30px', fontSize: '13px', padding: '0 8px', width: '100%', textAlign: 'center', bottom: 0, position: 'absolute'}} className="overflowCategory" >Kimono</Typography>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className="ContainerRecommendForYou" sx={{textAlign: 'center'}}>
                <Typography variant="h3" color="initial" className="subtitleCategorys">You May Also Like:</Typography>
                <Service only={"men"} start={0} end={20}/>
            </Box>
            <ServiceBanner />
            <Newsletter />
        </>
    )
}