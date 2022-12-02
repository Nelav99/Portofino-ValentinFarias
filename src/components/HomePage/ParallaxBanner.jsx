import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function ParallaxBanner() {
    return (
        <Container className="fullBanner parallaxBanner1 parallax textCenter">
            <Box className="containerParallax">
                <div className="row">
                    <div className="col">
                        <div className="bannerContain">
                            <Typography variant="h2">2022</Typography>
                            <Typography variant="h3">Fashion Trends</Typography>
                            <Typography variant="h4">Special Offer</Typography>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    )
}