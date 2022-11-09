import { Container, Box, Typography, } from "@mui/material";
import React from "react";

export default function PrincipalTitle() {
    return (
        <Container>
            <Box>
                <div className="title">
                    <Typography variant="h4" color="initial" className="subtitle">
                        special offer
                    </Typography>
                    <Typography variant="h2" color="initial" className="title-inner1">
                        top collection
                    </Typography>
                </div>
                <div className="product-para">
                    <Typography variant="body1" color="initial" className="text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </div>
            </Box>
        </Container>
    )
}