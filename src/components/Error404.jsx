import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Error from '../assets/img/error404.png';

export default function Error404() {
    return (
        <Container>
            <Box className="error404Container">
                <Typography variant="h2" color="initial" className="errorTitle">Coming Soon...</Typography>
                <img src={Error} alt="Error 404: Not Found" />
            </Box>
        </Container>
    )
}