import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Logo from '../assets/img/logo/logoPortofino2.png';
import App from '../assets/img/pay/app.jpg';
import Pay from '../assets/img/pay/methodPay.png';
import Play from '../assets/img/pay/app.jpg';

export default function Footer() {
    return (
        <Container>
            <footer className="section-p1">
                <Box className="logoFooter">
                    <img src={Logo} alt="Logo Malmo" className="logo" />
                </Box>
                <Box className="col">
                    <Box className="contactFooter">
                        <h4>Contact</h4>
                        <p className="p1"> <strong>Address: </strong>Istedgade 6, 1650, Copenhague.</p>
                        <p className="p2"><strong>Phone: </strong>+45 9832 3284</p>
                        <p className="p3"><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                        <Box className="follow">
                            <h4 className="usFollow">Follow us</h4>
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
                        <h4>About</h4>
                        <a href="/">About Us</a>
                        <a href="/">Delivery Information</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms & Conditions</a>
                        <a href="/">Contact Us</a>
                    </Box>
                    <Box className="accountFooter">
                        <h4>My Account</h4>
                        <a href="/">Sign In</a>
                        <a href="/">View Cart</a>
                        <a href="/">My Wishlist</a>
                        <a href="/">Track My Order</a>
                        <a href="/">Help</a>
                    </Box>
                    <Box className="appFooter install">
                        <Typography variant="h4" sx={{fontSize: 14, fontWeight: 'bold'}}>
                            Install App
                        </Typography>
                        <Typography variant="p">
                            From App Store or Google Play
                        </Typography>
                        <Box className="row">
                            <img src={App} alt="App Store"/>
                            <img src={Play} alt="Google Play"/>
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
                    <Typography variant="p">
                        © 2022, Valentín Farías - Front End Developer
                    </Typography>
                </Box>
            </footer>
        </Container>
    );
}