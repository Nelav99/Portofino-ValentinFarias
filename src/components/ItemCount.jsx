import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ItemCount({stock, initial, onAdd}) {
    const [cont, setCont] = useState(parseInt(initial));

    function add() {
        if(cont < stock) {
            setCont(cont + 1);
        }
    }

    function subtract(e) {
        const target = e.target;
        if(cont === 1) {
            target.setAttribute('disable', '');
        } else {
            setCont(cont - 1);
        }
    }

    function availableStock() {
        if(cont === stock) {
            return '¡No more Stock Availabel!'
        } else {
            return `Availabel Stock: ${stock - cont}`
        }
    }

    useEffect(() => {
        setCont(parseInt(initial));
    }, [initial]);

    return (
        <>
            <Box className="containerQuantity">
                <Typography variant="h6" color="initial">Quantity:</Typography>
                <Box className="counterContainer">
                    <Box className="quantity">
                        <Button className="btnsubtract" onClick={subtract}><RemoveOutlinedIcon/></Button>
                        <span className="numberCont">{cont}</span>
                        <Button className="btnADD" onClick={add}><AddOutlinedIcon/></Button>
                    </Box>
                    <Typography variant="subtitle2" color="initial" className='contAvailable'>{availableStock()}</Typography>
                </Box>
            </Box>
            <Box className="btnAddWishList">
                <Button className="btnAddToCart"> ADD TO CART</Button>
                <Button className="btnAddToWishlist"><FavoriteBorderOutlinedIcon className="wishlistIcon"/></Button>
            </Box>
        </>
    )
}

