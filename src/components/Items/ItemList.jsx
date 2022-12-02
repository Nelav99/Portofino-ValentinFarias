import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Service from "../Service/Service";

export default function ItemList({only, start, end}) {
    return (
        <Container className="containerSpecialProducts containerItemList">
            <Box className="container containerOffPadding">
                <Box className="title">
                    <Typography variant="h4" color="initial" className="subtitle">Most Acclaimed</Typography>
                    <Typography variant="h2" color="initial" className="title-inner1">You May Also like</Typography>
                </Box>
                <Box className="product-para">
                    <Typography variant="body1" color="initial" className="text-center" sx={{marginBottom: 0, marginTop: '-7', fontSize: '14px', color:'#777', lineHeight: '24px', letterSpacing: '.05em', textAlign: 'center', fontWeight: 500,paddingBottom: 0}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </Box>
                <Box sx={{padding: '10px'}}>
                    <Service only={only} start={start} end={end}/>
                </Box>
            </Box>
        </Container>
    )
}