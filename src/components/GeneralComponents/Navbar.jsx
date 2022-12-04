import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Tab, Tabs, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo/logoPortofino.png';
import { useCartContext } from '../../ContextContainer';
import CartWidgets from './CartWidgets';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bannerMenuMobile from '../../assets/img/banner/bannerMenuMobile.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className='middleContainerTabPanel'>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navbar() {
    const { Cart } = useCartContext();
    const [Amount, setAmount] = useState(0);
    const [value, setValue] = React.useState(0);
    const [state, setState] = React.useState({
        top: false,
        right: false,
        bottom: false,
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 331, backgroundColor: '#fff', marginBottom: '13px' }}
            role="presentation"
            className='presentation'
        >
            <Box className='containerHeader' sx={{ width: '100%' }}>
                <Box className='containerTabs'>
                    <Tabs className='subContainerTabs' value={value} onChange={handleChange}>
                        <Tab className='tabMenuMobile' sx={{width: '140px', margin: '0 13px', fontSize: '18px', fontWeight: 500, textTransform: 'capitalize', letterSpacing: 'normal', display: 'flex', flex: '1 0 auto', justifyContent: 'center', lineHeight: 'normal', p: 0, textAlign: 'center', color: '#666', cursor: 'pointer',}} label="Women" {...a11yProps(0)} />
                        <Tab className='tabMenuMobile' sx={{width: '140px', margin: '0 13px', fontSize: '18px', fontWeight: 500, textTransform: 'capitalize', letterSpacing: 'normal', display: 'flex', flex: '1 0 auto', justifyContent: 'center', lineHeight: 'normal', p: 0, textAlign: 'center', color: '#666', cursor: 'pointer',}} label="Men" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel className='containerPanels' value={value} index={0}>
                    <List className='containerList'>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForWomen'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}} >
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Clothing</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForWomen/PlusSize'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Plus Size</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForWomen/Shoes'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Shoes</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForWomen/Bags'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Bags</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForWomen/Acc&Beauty'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Acc & Beauty</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForWomen/Kids&Mom'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Kids & Mom</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForWomen/Home&Garden'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Home & Garden</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                    </List>
                </TabPanel>
                <TabPanel className='containerPanels' value={value} index={1}>
                <List className='containerList'>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForMen'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}} >
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Clothing</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForMen/Shoes'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}} >
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Shoes</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForMen/Bags'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}} >
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Bags</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForMen/Accessories'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}} >
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Accessories</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                        <ListItemButton onClick={toggleDrawer(anchor, false)} sx={{height: '52px', lineHeight: '52px', padding: '0 18px'}}>
                            <Link to={'Category/ForMen/Home&Garden'} style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}} >
                                <Typography sx={{fontSize: '16px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Home & Garden</Typography>
                                <ListItemIcon sx={{ width: '14px', height: '14px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ArrowForwardIosIcon sx={{color: '#666', lineHeight: 1, fontWeight: 400, fontSize: '13px'}}/>
                                </ListItemIcon>
                            </Link>
                        </ListItemButton>
                    </List>
                </TabPanel>
            </Box>
        </Box>
    );

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setAmount(Cart.reduce((acc, item) => acc + item.quantity, 0));
    }, [Cart]);

    return (
        <>
            <AppBar className='navbarHeader' position="static">
                <Container max-width="xl" sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex', }}} className="topHeader space-1">
                    <div className='container'>
                        <div className='row'>
                            <div className='textLeft'>
                                <div className='headerContact'>
                                    <ul>
                                        <li className='welcome'>Welcome to Our Store</li>
                                        <li className='phone'><i className="fa-solid fa-phone"></i>Call Us: 123 - 456 - 7890</li>
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
                <Container maxWidth="xl" sx={{bgcolor: '#fff'}} className="container principalNavBar">
                    <Toolbar disableGutters className='row subContainerPrincipalNavBar' sx={{bgcolor: '#fff'}}>
                        <Box className='col columnPrincipalNavBar'>
                            <Box className='mainMenu'>
                                <Box className='menuLeft'>
                                    <div className='brandLogo'>
                                        <Link to='/'>
                                            <img src={Logo} alt='Logo Portofino' className='imgfluid'></img>
                                        </Link>
                                    </div>
                                </Box>
                                <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }} className='menuRight'>
                                    <div className='containerPrincipal'>
                                        <div className='containerMenu'>
                                            <div className='mainMenu'>
                                                <ul className='navMenu'>
                                                    <Button>
                                                        <NavLink to={'/'}>
                                                            Home
                                                        </NavLink>
                                                    </Button>
                                                    <Button>
                                                        <NavLink to={'/Category/Shop'}>
                                                            Shop
                                                        </NavLink>
                                                    </Button>
                                                    <Button>
                                                        <NavLink to={'/Category/Products'}>
                                                            Products
                                                            <span className='subArrow'>
                                                                <KeyboardArrowDownOutlinedIcon />
                                                            </span>
                                                        </NavLink>
                                                    </Button>
                                                    <Button>
                                                        <NavLink to={'/Category/Features'}>
                                                            Features
                                                            <span className='subArrow'>
                                                                <KeyboardArrowDownOutlinedIcon />
                                                            </span>
                                                        </NavLink>
                                                    </Button>
                                                    <Button>
                                                        <NavLink to={'/Category/Blog'}>
                                                            Blog
                                                        </NavLink>
                                                    </Button>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='iconsNavBar'>
                                        <CartWidgets Amount={Amount}/>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
                <Container maxWidth="xl" sx={{bgcolor: '#fff'}} className="container menuMobile">
                    <Toolbar disableGutters className='row subcontainerMenuMobile' sx={{bgcolor: '#fff'}}>
                        <Box className='col'>
                            <Box className='mainMenu'>
                                <Box className='menuLeft'>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={toggleDrawer('left', true)}
                                        edge="start"
                                        sx={{ mr: 2, }}
                                        className="menuMobile"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                                <Box className='brandLogo'>
                                    <Link to='/'>
                                        <img src={Logo} alt='Logo Portofino' className='imgfluid'></img>
                                    </Link>
                                </Box>
                                <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }} className='menuRight'>
                                    <Box>
                                        <CartWidgets Amount={Amount}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {["bottom","left","right","top"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{position: 'relative', width: '330px', maxWidth: '450px', background: '#f9f9f9', height: '100%', boxShadow: '0.26667rem 0 0.37333rem rgb(0 0 0 / 12%)'}}
                        className="principalContainer"
                    >
                        {list(anchor)}
                        <List sx={{padding: '18px 0 8px', marginBottom: '13px', listStyle: 'none', textAlign: 'left', overflowX: 'hidden', overflowY: 'auto', backgroundColor: '#fff', width: '331px', }}>
                            <ListItem sx={{listStyle: 'none', padding: '0 18px 8px', height: 'auto', lineHeight: '52px'}}>
                                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <img src={bannerMenuMobile} alt="bannerAppPortofino" style={{display: 'block', borderStyle: 'none', width: '100%'}} />
                                    </Box>
                                </Box>
                            </ListItem>
                            <ListItemButton sx={{height: '52px', lineHeight: '52px', padding: '0 18px', listStyle: 'none'}}>
                                <Box style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                    <img src="https://img.icons8.com/ios/50/666666/in-transit--v1.png" alt='shipping to' style={{width: '26px', height: '26px'}}/>
                                    <Typography sx={{flex: '1 0 auto', display: 'block', textAlign: 'left',fontSize: '16px', paddingLeft: '20px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Ship to</Typography>
                                    <Typography sx={{flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'block',fontSize: '16px', color: '#f85184', lineHeight: '53px', fontWeight: 400, textAlign: 'right'}} variant="caption" color="initial">Argentina</Typography>
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{height: '52px', lineHeight: '52px', padding: '0 18px', listStyle: 'none'}}>
                                <Box style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                    <img src="https://img.icons8.com/ios/50/666666/globe--v1.png" alt='Lenguage' style={{width: '26px', height: '26px'}}/>
                                    <Typography sx={{flex: '1 0 auto', display: 'block', textAlign: 'left',fontSize: '16px', paddingLeft: '20px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Lenguage</Typography>
                                    <Typography sx={{flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'block',fontSize: '16px', color: '#f85184', lineHeight: '53px', fontWeight: 400, textAlign: 'right'}} variant="caption" color="initial">English</Typography>
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{height: '52px', lineHeight: '52px', padding: '0 18px', listStyle: 'none'}}>
                                <Box style={{m: 0, p: 0, textDecoration: 'none', color: '#', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                                    <img src="https://img.icons8.com/fluency-systems-regular/48/666666/money.png" alt='shipping to' style={{width: '26px', height: '26px'}}/>
                                    <Typography sx={{flex: '1 0 auto', display: 'block', textAlign: 'left',fontSize: '16px', paddingLeft: '20px', color: '#333', lineHeight: '53px', fontWeight: 400}} variant="caption" color="initial">Currency</Typography>
                                    <Typography sx={{flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'block',fontSize: '16px', color: '#f85184', lineHeight: '53px', fontWeight: 400, textAlign: 'right'}} variant="caption" color="initial">USD</Typography>
                                </Box>
                            </ListItemButton>
                        </List>
                        <List sx={{padding: '18px',m: 0, display: 'flex', justifyContent: 'space-between', width: '331px', }}>
                            <ListItemButton sx={{listStyle: 'none', p: 0, width: '26px', height: '28px'}}>
                                <Link style={{textDecoration: 'none', color: '#000', backgroundColor: 'transparent'}}>
                                    <FacebookIcon sx={{fontSize: '26.5px', lineHeight: 1, fontWeight: 400}}/>
                                </Link>
                            </ListItemButton>
                            <ListItemButton sx={{listStyle: 'none', p: 0, width: '26px', height: '28px'}}>
                                <Link style={{textDecoration: 'none', color: '#000', backgroundColor: 'transparent'}}>
                                    <InstagramIcon sx={{fontSize: '26.5px', lineHeight: 1, fontWeight: 400}}/>
                                </Link>
                            </ListItemButton>
                            <ListItemButton sx={{listStyle: 'none', p: 0, width: '26px', height: '28px'}}>
                                <Link style={{textDecoration: 'none', color: '#000', backgroundColor: 'transparent'}}>
                                    <PinterestIcon sx={{fontSize: '26.5px', lineHeight: 1, fontWeight: 400}}/>
                                </Link>
                            </ListItemButton>
                            <ListItemButton sx={{listStyle: 'none', p: 0, width: '26px', height: '28px'}}>
                                <Link style={{textDecoration: 'none', color: '#000', backgroundColor: 'transparent'}}>
                                    <TwitterIcon sx={{fontSize: '26.5px', lineHeight: 1, fontWeight: 400}}/>
                                </Link>
                            </ListItemButton>
                            <ListItemButton sx={{listStyle: 'none', p: 0, width: '26px', height: '28px'}}>
                                <Link style={{textDecoration: 'none', color: '#000', backgroundColor: 'transparent'}}>
                                    <YouTubeIcon sx={{fontSize: '26.5px', lineHeight: 1, fontWeight: 400}}/>
                                </Link>
                            </ListItemButton>
                            <ListItemButton sx={{listStyle: 'none', p: 0, width: '26px', height: '28px'}}>
                                <Link style={{textDecoration: 'none', color: '#000', backgroundColor: 'transparent'}}>
                                    <img style={{width: '26.5px', height: '26.5px', lineHeight: 1}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABNElEQVRIie2WQWoCMRRAn0VLV64qVN25UK/RnVK6dtUb2J7FM4geYLrqzqUgQnsGR9pNdS1UsItMIBOj8zNEEPTBhxl+8l+SyWQGrlwiT8AS2AWKGOhKxHFAqY6FLSk4xDvJ6HKQct2cSJKJVLwCXoE6auQ6ysAz8BliMPbz+QWaGX3ugImjrxne4r5wwA1gG1JcNXI9YArMkxhYfechxeZujKzcBrXMmqFULHmdzDY1oAMUk/svYGbk71Gb7RF4Ebj2xF5L5OA2q47vjH04WqeIH/ZSa7bAB/DtWS/Fsc317sjriIx2BUc+hWTGD8BPcj0CKkDJavMHjI37mqDuHnkPEJM3Rx1v8QpoeUjbwDqEWMv1R+IQddRMXdJcr1Mozvd7vDyBJ5Y06hL2v2uBOnSuXBj/Y1S+FM0gjvwAAAAASUVORK5CYII=" alt='blog'/>
                                </Link>
                            </ListItemButton>
                        </List>
                        <Box sx={{padding: '0 18px 18px'}}>
                            <Box sx={{color: '#999', fontSize: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography variant="caption" color="#999" >©2022 PORTOFINO.COM</Typography>
                                <Typography variant="caption" color="#999">
                                    <Link style={{textDecoration: 'none', color: '#999'}}>Full site </Link>
                                    | T&C
                                </Typography>
                            </Box>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    )
}
