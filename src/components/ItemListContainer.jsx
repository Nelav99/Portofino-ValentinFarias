import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HeroImage from '../assets/img/hero/hero1.jpg'

export default function ItemListContainer({greeting}) {
    return (
        <Container className="heroContainer" maxWidth="xl" styles={{ backgroundImage:`url(${HeroImage})` }}>
            <Box className="textContainer">
                <Typography variant="h1" color="initial" sx={{color: '#FF4C3B', fontSize: 100, textTransform: 'uppercase'}}>
                    {greeting}
                </Typography>
            </Box>
        </Container>
    );
}