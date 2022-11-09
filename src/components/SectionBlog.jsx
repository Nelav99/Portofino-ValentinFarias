import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function SectionBlog() {
    return (
        <Container className="containerSpecialProducts">
            <Box className="container containerOffPadding">
                <Box className="title">
                    <Typography variant="h4" color="initial" className="subtitle">Our Tips</Typography>
                    <Typography variant="h2" color="initial" className="title-inner1">
                        Blog
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}