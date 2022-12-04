import React from "react";
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from "react-router-dom";

export default function CartWidgets({Amount}) {

    return(
        <Box className="iconNav">
            <ul>
                <li className="onhoverDiv mobileSearch">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                </li>
                <li className="onhoverDiv mobileSettings">
                        <IconButton>
                            <SettingsOutlinedIcon />
                        </IconButton>
                </li>
                <li className="onhoverDiv mobileCart">
                    <div className="cartQuantity">{Amount}</div>
                    <IconButton>
                        <Link to={'./Cart'}>
                            <ShoppingCartOutlinedIcon />
                        </Link>
                    </IconButton>
                </li>
            </ul>
        </Box>
    );
}
