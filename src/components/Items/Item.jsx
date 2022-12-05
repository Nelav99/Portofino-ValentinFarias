import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Item({id, name, image, price, only}){
    return (
        <Box id="btnOpenPopUp" className="openProductDetails">
            <img src={image} alt={name} className="principalProduct" />
            <Box className="des">
                <Typography variant="h5" color="#222">
                    {name}
                </Typography>
                {/* <h5>{name}</h5> */}
                <Box className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </Box>
                <Box id="priceContainerFeatures">
                    <Typography variant="h4" color="#222">
                        $
                    </Typography>
                    <Typography variant="h4" color="#222">
                        {price}
                    </Typography>
                </Box>
                <Typography variant="h4" color="#222" style={{display: 'none'}}>
                        {only}
                </Typography>
            </Box>
            <Link to={'/Item/' + id} className="normal viewDetails">Add To Cart</Link>
        </Box>
    );
}