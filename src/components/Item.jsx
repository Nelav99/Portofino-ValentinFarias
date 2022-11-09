import React from "react";
import { Button, Typography } from "@mui/material";

export default function Item({id, name, image, price}){
    return (
        <div id="btnOpenPopUp" className="openProductDetails">
            <img src={image} alt={name} className="principalProduct" />
            <div className="des">
                <Typography variant="h5" color="#222">
                    {name}
                </Typography>
                {/* <h5>{name}</h5> */}
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="priceContainerFeatures">
                    <h4>$ </h4>
                    <h4>{price}</h4>
                </div>
            </div>
            <Button href={'/Product/' + id} className="normal viewDetails">Add To Cart</Button>
        </div>
    );
}