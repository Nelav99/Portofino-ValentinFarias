import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function ParallaxShop() {
    return (
        <Container className="fullBanner parallaxBanner2 parallax textCenter">
            <Box className="container">
                <div className="row">
                    <div className="col">
                        <div className="bannerContainShop">
                            <Typography variant="h2" sx={{ fontSize: '100px', fontWeight: '700',color: '#3e5067', textTransform: 'uppercase', marginTop: '-15px', letterSpacing: '.02em', lineHeight: 1}}>SALE</Typography>
                            <Typography variant="h3" sx={{fontSize: '60px', color: '#333', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '.03em',     marginBottom: '.5rem', lineHeight: 1.2, marginTop: 0}}>Fashion Trends</Typography>
                            <Typography variant="h4">Special Offer</Typography>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    )
}