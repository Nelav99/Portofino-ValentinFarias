import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../assets/img/logo/logoPortofino.png';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CartWidgets from './CartWidgets';
import { Button } from '@mui/material';


const pages = ['Home', 'Shop', 'Products','Features', 'Blog'];

export default function Navbar() {
    return (
        <AppBar position="static">
            <Container max-width="xl" sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex', }}} className="topHeader space-1">
                <div className='container'>
                    <div className='row'>
                        <div className='textLeft'>
                            <div className='headerContact'>
                                <ul>
                                    <li className='welcome'>Welcome to Our store</li>
                                    <li className='phone'><i className="fa-solid fa-phone"></i> Call Us: 123 - 456 - 7890</li>
                                </ul>
                            </div>
                        </div>
                        <div className='textRight'>
                            <ul className='headerDropdown'>
                                <li className='mobileWishlist'>
                                    <a href='/' className='wishlist'><i className="fa-solid fa-heart"></i>Wishlist</a>
                                </li>
                                <li className='mobileAccount'>
                                    <a href='/' className='myAccount'><i className="fa-solid fa-user"></i>My Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <Container maxWidth="xl" sx={{bgcolor: '#fff'}} className="container">
                <Toolbar disableGutters className='row' sx={{bgcolor: '#fff'}}>
                    <Box className='col'>
                        <Box className='mainMenu'>
                            <Box className='menuLeft'>
                                <div className='brandLogo'>
                                    <a href='/'>
                                        <img src={Logo} alt='Logo Portofino' className='imgfluid'></img>
                                    </a>
                                </div>
                            </Box>
                            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }} className='menuRight'>
                                <div>
                                    <div className='containerMenu'>
                                        <div className='mainMenu' key={pages}>
                                            <ul className='navMenu'>
                                                {pages.map((page) => (
                                                    <Button key={page}>
                                                        <a href='/'>
                                                            {page}
                                                            <span className='subArrow'>
                                                                <KeyboardArrowDownOutlinedIcon />
                                                            </span>
                                                        </a>
                                                    </Button>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <CartWidgets />
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
