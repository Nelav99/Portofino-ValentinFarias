import React from "react";
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export default function CartWidgets() {
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
                    <div className="cart-qty-cls">0</div>
                    <IconButton>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </li>
            </ul>
        </Box>
    );
}
