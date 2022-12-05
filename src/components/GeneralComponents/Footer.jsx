import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Logo from '../../assets/img/logo/logoPortofino2.png';
import App from '../../assets/img/pay/app.jpg';
import Pay from '../../assets/img/pay/methodPay.png';
import Play from '../../assets/img/pay/app.jpg';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Container className="footerContainer">
            <footer className="section-p1">
                <Box className="logoFooter">
                    <img src={Logo} alt="Logo Malmo" className="logo" />
                </Box>
                <Box className="col">
                    <Box className="contactFooter">
                        <Typography variant="h4" color="initial" sx={{color: '#0B2746', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 0, paddingBottom: '15px'}}>Contact</Typography>
                        <Typography className="p1" variant="body2" color="#222" sx={{marginBottom: '8px'}}><strong>Address: </strong>Istedgade 6, 1650, Copenhague.</Typography>
                        <Typography className="p2" variant="body2" color="#222" sx={{marginBottom: '8px'}}><strong>Phone: </strong>+45 9832 3284</Typography>
                        <Typography className="p3" variant="body2" color="#222" sx={{marginBottom: '8px'}}><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</Typography>
                        <Box className="follow">
                            <Typography variant="h4" color="initial" sx={{color: '#0B2746', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 0, paddingBottom: '15px'}}>Follow us</Typography>
                            <Box className="icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-pinterest-p"></i>
                                <i className="fab fa-youtube"></i>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="aboutFooter">
                        <Typography variant="h4" color="initial" sx={{color: '#0B2746', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 0, paddingBottom: '15px'}}>About</Typography>
                        <Link to="/">About Us</Link>
                        <Link to="/">Delivery Information</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms & Conditions</Link>
                        <Link to="/">Contact Us</Link>
                    </Box>
                    <Box className="accountFooter">
                        <Typography variant="h4" color="initial" sx={{color: '#0B2746', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 0, paddingBottom: '15px'}}>My Account</Typography>
                        <Link to="/">Sign In</Link>
                        <Link to="/">View Cart</Link>
                        <Link to="/">My Wishlist</Link>
                        <Link to="/">Track My Order</Link>
                        <Link to="/">Help</Link>
                    </Box>
                    <Box className="appFooter install">
                        <Typography variant="h4" color="initial" sx={{color: '#0B2746', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 0, paddingBottom: '15px'}}>Install App</Typography>
                        <Typography variant="body2">From App Store or Google Play</Typography>
                        <Box className="row">
                            <img src={App} alt="App Store" style={{margin: '10px 5px'}}/>
                            <img src={Play} alt="Google Play" style={{margin: '10px 5px'}}/>
                        </Box>
                        <Typography variant="p">
                            Secured Payment Gateways
                        </Typography>
                        <Box className="securityPay">
                            <img src={Pay} alt="Payment Methods"/>
                        </Box>
                    </Box>
                </Box>

                <Box className="copyright">
                    <Typography variant="body2" sx={{marginTop: '20px'}}>
                        © 2022, Valentín Farías - Front End Developer
                    </Typography>
                </Box>
            </footer>
        </Container>
    );
}