import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Banner1 from '../assets/img/banner/banner1.jpg'
import Banner2 from '../assets/img/banner/banner2.jpg'

export default function BannerPri() {
    return (
        <Container className="containerBannersPri" sx={{paddingBottom: 0, paddingTop: 8, display: 'block'}}>
            <Box className="container">
                <div className="contentBanner">
                    <div className="bannerContain">
                        <a href="/Category/ForMen" className="bannerMen">
                            <div className="collectionBanner">
                                <img src={Banner1} alt="For Men" className="imageBannerPri"/>
                                <div className="detailsBanner">
                                    <div>
                                        <Typography variant="h4" color="initial">
                                            save 30%
                                        </Typography>
                                        <Typography variant="h2" color="initial">
                                            men
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="bannerContain">
                        <a href="/Category/ForWomen" className="bannerWomen">
                            <div className="collectionBanner">
                                <img src={Banner2} alt="For Women" className="imageBannerPri"/>
                                <div className="detailsBanner">
                                    <div>
                                        <Typography variant="h4" color="initial">
                                            save 60%
                                        </Typography>
                                        <Typography variant="h2" color="initial">
                                            women
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </Box>
        </Container>
    )
}