import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Checkbox, Container, Typography } from '@mui/material';
import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../../ContextContainer';
import cartEmptyImage from '../../assets/img/cart/emptyCart.jpg';
import Service from '../Service/Service';
import Newsletter from '../HomePage/Newsletter';
import Counter from '../GeneralComponents/Counter';
import ModalUserRegister from '../GeneralComponents/ModalUserRegister';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
    const {addItemWithNewQuantity, clearCart, removeItemCart, Cart, User} = useContext(ContextGlobal);
    const [subtotal, setSubtotal] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [total, setTotal] = useState(0);

    const [openModal, setOpen] = React.useState(false);
    const handleCloseModal = () => {setOpen(false)};

    const removeItem = (id) => {
        removeItemCart(id)
    }

    const register = () => {
        if (User === "") {
            setOpen(true);
        } else {
            window.location = '/Checkout';
        }
    }

    const registerCartEmpty = () => {
        if (User === "") {
            setOpen(true);
        } else {
            window.location = '/';
        }
    }

    const check = () => {
        let prices = Cart.map(item => item.price * item.quantity)
        setSubtotal(prices.reduce((acc, el) => acc + el, 0));
        setTaxes(subtotal * 0.21);
        setTotal(subtotal + taxes);
    }

    const newQuantity = (item, quantity, size) => {
        addItemWithNewQuantity(item, quantity, size);
    }

    useEffect(() => {
        check()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Cart, subtotal, taxes, total])

    return (
        <>
            {Cart.length === 0 && <>
                <Container className='containerCartMobile' style={{margin: 0, padding: 0, maxWidth: '100%'}}>
                    <Box className='containerSecureBtn' sx={{width: '100%',borderBottom: '1px solid #e5e5e5'}}>
                        <Box className='subcontainerSecureAndBtn' sx={{maxWidth: '1530PX', minWidth: '916px', width: '100%', height: '56px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto',   marginRight: 'auto', paddingLeft: '12px', paddingRight: '12px'}}>
                            <Box className="checkoutContainer" sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '22px', lineHeight: '22px', paddingRight: '8px', paddingLeft: '8px', marginLeft: '16px', marginRight: '16px'}}>
                                <GppGoodIcon sx={{color: '#669933', fontSize: '14px',verticalAlign: 'middle'}}/>
                                <Typography variant="h6" color="#669933" sx={{fontSize: '14px', marginLeft: '4px', marginRight: '4px'}}>Secure Checkout</Typography>
                            </Box>
                            <Box className='btnContinueShopping'>
                                <Link to={'/Category/Shop'} style={{color: '#333', margin: '0 16px'}}>Continue Shopping <ArrowForwardIosIcon sx={{fontSize: '14px', verticalAlign: 'middle'}}/></Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='container' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <Box className='containerEmptyCart' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', padding: '38px 0 0'}}>
                            <Box className='emptyImage' sx={{width: '252px', height: '142px'}}>
                                <img src={cartEmptyImage} alt="Empty Cart" style={{width: '100%', height: '100%'}}/>
                            </Box>
                            <Box className='emptyText' sx={{margin: '0 5px', paddingTop: '10px', textAlign: 'center'}}>
                                <Typography variant="body2" color="initial" sx={{fontSize: '18px', fontWeight: 'Bold'}}>Your shopping cart is empty.</Typography>
                                <Typography variant="body2" sx={{fontSize: '13px', fontWeight: 400, color: '#999', marginBottom: '15px', lineHeight: 1.5}}>
                                    <span style={{color: '#333', textDecoration: 'underline', cursor: 'pointer'}}>Sing in</span> to see the items you added previously
                                </Typography>
                                <Link onClick={registerCartEmpty} className='btn btn-secondary' style={{padding: 0, minWidth: '105px', height: '28px', lineHeight: '28px', fontSize: '13px'}}>Shop Now</Link>
                                <Typography variant="body2" sx={{fontSize: '13px', fontWeight: 400, color: '#999', paddingTop: '4px', lineHeight: 1.5}}>
                                    <span style={{color: '#e30044', cursor: 'pointer'}}>10% OFF</span> For New Users
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="containerMoreProducts" sx={{marginBottom: '48px'}}>
                            <Typography variant="h3" color="initial" sx={{fontSize: '24px',textTransform: 'uppercase', margin: '48px 0 0', color: '#0B2746', paddingLeft: '35px'}}>Popular products:</Typography>
                            <Service only={"women"} start={0} end={4}/>
                            <Typography variant="h3" color="initial" sx={{fontSize: '24px',textTransform: 'uppercase', margin: '48px 0 0', color: '#0B2746', paddingLeft: '35px'}}>For Men:</Typography>
                            <Service only={"men"} start={0} end={4}/>
                        </Box>
                    </Box>
                    {
                        openModal && <ModalUserRegister open={openModal} handleClose={handleCloseModal} />
                    }
                </Container>
                <Container className='containerCart' style={{margin: 0, padding: 0, maxWidth: '100%'}}>
                    <Box className='containerSecureBtn' sx={{width: '100%',borderBottom: '1px solid #e5e5e5'}}>
                        <Box className='subcontainerSecureAndBtn' sx={{maxWidth: '1530PX', minWidth: '916px', width: '100%', height: '56px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto',   marginRight: 'auto', paddingLeft: '12px', paddingRight: '12px'}}>
                            <Box className="checkoutContainer" sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '22px', lineHeight: '22px', paddingRight: '8px', paddingLeft: '8px', marginLeft: '16px', marginRight: '16px'}}>
                                <GppGoodIcon sx={{color: '#669933', fontSize: '14px',verticalAlign: 'middle'}}/>
                                <Typography variant="h6" color="#669933" sx={{fontSize: '14px', marginLeft: '4px', marginRight: '4px'}}>Secure Checkout</Typography>
                            </Box>
                            <Box className='btnContinueShopping'>
                                <Link to={'/Category/Shop'} style={{color: '#333', margin: '0 16px'}}>Continue Shopping <ArrowForwardIosIcon sx={{fontSize: '14px', verticalAlign: 'middle'}}/></Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='container' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <Box className='containerEmptyCart' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', padding: '38px 0 0'}}>
                            <Box className='emptyImage' sx={{width: '252px', height: '142px'}}>
                                <img src={cartEmptyImage} alt="Empty Cart" style={{width: '100%', height: '100%'}}/>
                            </Box>
                            <Box className='emptyText' sx={{margin: '0 5px', paddingTop: '10px'}}>
                                <Typography variant="body2" color="initial" sx={{fontSize: '18px', fontWeight: 'Bold'}}>Your shopping cart is empty.</Typography>
                                <Typography variant="body2" sx={{fontSize: '13px', fontWeight: 400, color: '#999', marginBottom: '15px', lineHeight: 1.5}}>
                                    <span style={{color: '#333', textDecoration: 'underline', cursor: 'pointer'}}>Sing in</span> to see the items you added previously
                                </Typography>
                                <Link onClick={registerCartEmpty} className='btn btn-secondary' style={{padding: 0, minWidth: '105px', height: '28px', lineHeight: '28px', fontSize: '13px'}}>Shop Now</Link>
                                <Typography variant="body2" sx={{fontSize: '13px', fontWeight: 400, color: '#999', paddingTop: '4px', lineHeight: 1.5}}>
                                    <span style={{color: '#e30044', cursor: 'pointer'}}>10% OFF</span> For New Users
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="containerMoreProducts" sx={{marginBottom: '48px'}}>
                            <Typography variant="h3" color="initial" sx={{fontSize: '24px',textTransform: 'uppercase', margin: '48px 0 0', color: '#0B2746', paddingLeft: '35px'}}>Popular products:</Typography>
                            <Service only={"women"} start={0} end={4}/>
                            <Typography variant="h3" color="initial" sx={{fontSize: '24px',textTransform: 'uppercase', margin: '48px 0 0', color: '#0B2746', paddingLeft: '35px'}}>For Men:</Typography>
                            <Service only={"men"} start={0} end={4}/>
                        </Box>
                    </Box>
                    {
                        openModal && <ModalUserRegister open={openModal} handleClose={handleCloseModal} />
                    }
                </Container>
                <Newsletter />
            </>
            }
            {Cart.length > 0 && <>
                <Container className='containerCartMobile' style={{margin: 0, padding: 0, maxWidth: '100%'}}>
                    <Box className='containerSecureBtn' sx={{width: '100%',borderBottom: '1px solid #e5e5e5'}}>
                        <Box className='subcontainerSecureAndBtn' sx={{maxWidth: '1530PX', minWidth: '916px', width: '100%', height: '56px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto',   marginRight: 'auto', paddingLeft: '12px', paddingRight: '12px'}}>
                            <Box className="checkoutContainer" sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '22px', lineHeight: '22px', paddingRight: '8px', paddingLeft: '8px', marginLeft: '16px', marginRight: '16px'}}>
                                <GppGoodIcon sx={{color: '#669933', fontSize: '14px',verticalAlign: 'middle'}}/>
                                <Typography variant="h6" color="#669933" sx={{fontSize: '14px', marginLeft: '4px', marginRight: '4px'}}>Secure Checkout</Typography>
                            </Box>
                            <Box className='btnContinueShopping'>
                                <Link to={'/Category/Shop'} style={{color: '#333', margin: '0 16px'}}>Continue Shopping <ArrowForwardIosIcon sx={{fontSize: '14px', verticalAlign: 'middle'}}/></Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='containerTableAndAside' sx={{width: '1255px', maxWidth: '1530px', minWidth: '920px', margin: '0 auto', paddingLeft: '12px', paddingRight: '12px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box className='containerTableProducts' sx={{width: '70%'}}>
                            <Box className='containerAddOnItem' sx={{height: '156px',}}>
                                <Box className='subcontainerAddOnItem'>
                                    <Box className='containerFreeShipping' sx={{backgroundColor: '#f2faf3', padding: '16px 20px', marginBottom: '16px', flex: '0 0  100%', maxWidth: '100%'}}>
                                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Box sx={{display: 'flex', flexWrap: 'wrap', flex: '1 1 0', maxWidth: '100%'}}>
                                                <Box className='iconFree'>
                                                    <LocalShippingOutlinedIcon sx={{color: '#333'}}/>
                                                </Box>
                                                <Box className='textFree' sx={{margin: '0 4px', alignSelf: 'center'}}>
                                                    <Typography variant="body2" color="initial" sx={{textTransform: 'capitalize'}}>Free Shipping</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='containerAddOn' sx={{backgroundColor: '#f2faf3', padding: '16px 20px', marginBottom: '16px', flex: '0 0  100%', maxWidth: '100%'}}>
                                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Box sx={{display: 'flex', flexWrap: 'wrap', flex: '1 1 0', maxWidth: '100%'}}>
                                                <Box className='iconFree'>
                                                    <ShoppingCartOutlinedIcon sx={{color: '#333'}}/>
                                                </Box>
                                                <Box className='textAddOn' sx={{margin: '0 4px', alignSelf: 'center'}}>
                                                    <Typography variant="body2" color="initial" sx={{textTransform: 'capitalize'}}>Add-on Item</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='tableProducts'>
                                <Typography variant="body2" color="initial" sx={{fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#1a1a1a', lineHeight: 1.5}}>Shopping Bag ({Cart.length} items)</Typography>
                                <Box className='productContainerTop' sx={{fontSize: '13px', color: '#999', backgroundColor: '#f7f7f7', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', height: '40px'}}>
                                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '356px', lineHeight: 1.5}}>Items</Box>
                                </Box>
                                <Box className='shopCartProducts'>
                                    <Box sx={{border: 'none'}}>
                                        <Box sx={{fontSize: '13px'}}>
                                            {Cart.map((product) => {
                                                return (
                                                    <Box key={product.id + product.size} className='containerProduct' sx={{paddingTop: '4px', borderBottom: '1px solid #e5e5e5'}}>
                                                        <Box className='subcontainerProduct' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px 0 15px'}}>
                                                            <Box className='containerBoxImage' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', width: '125px'}}>
                                                                <Link className='imageProduct' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '91px', height: '127px', position: 'relative'}}>
                                                                    <Box key={product.id + product.size} sx={{margin: 0, padding: 0, position: 'relative', width: '100%', height: '100%'}}>
                                                                        <img key={product.id + product.size} src={product.image} alt={product.name} style={{maxWidth: '100%', height: 'auto', width: '100%'}}/>
                                                                    </Box>
                                                                </Link>
                                                            </Box>
                                                            <Box key={product.id + product.size} className='containerDetailsProduct' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 1}}>
                                                                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: 1}}>
                                                                    <Box className='containerItemProduct' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center',width: '232px'}}>
                                                                        <Box sx={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-between', flex: '1 1 0', maxWidth: '100%', padding: '0 16px'}}>
                                                                            <Box className='containerNameSize'>
                                                                                <Typography variant="body2" color="initial" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>
                                                                                    <Link key={product.id + product.size} style={{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', color: '#999', }}>
                                                                                        {product.name}
                                                                                    </Link>
                                                                                </Typography>
                                                                                <Typography variant="body2" color="#999" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>Size: {product.size}</Typography>
                                                                            </Box>
                                                                            <Box className='containerQty' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '144px'}}>
                                                                                <Counter id={product.id} newQuantity={newQuantity}/>
                                                                            </Box>
                                                                            <Box className='containerSubtotalProduct' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', padding: '0 16px', width: '145px', color: '#1a1a1a'}}>
                                                                                <Typography variant="body2" color="initial" sx={{m: 0, p: 0, display: 'inline-block', direction: 'ltr', fontSize: '16px', lineHeight: 1.5, fontWeight: '700'}}>Subtotal: <strong style={{color: '#333'}}> ${(product.price * product.quantity).toFixed(2)}</strong> </Typography>
                                                                            </Box>
                                                                            <Box className='containerDeleteWish'>
                                                                                <Link onClick={() => {removeItem(product.id)}} style={{color: '#999', cursor: 'pointer', textDecoration: 'underline'}}><DeleteIcon sx={{color: '#999'}}/></Link>
                                                                            </Box>
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='containerBottomTable' sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', borderBottom: '1px solid #e5e5e5', height: '46px'}}>
                                    <Box className='containerDelete' sx={{flex: '1 1 0', maxWidth: '100%'}} onClick={clearCart}>
                                        <DeleteIcon sx={{color: '#999',fontSize: '24px', cursor: 'pointer', lineHeight: 1.5}}/>
                                        <Typography variant="caption" color="initial" sx={{margin: '0 2px', color: '#999', textDecoration: 'underline', fontSize: '13px', cursor: 'pointer', lineHeight: 1.5}}>Delete All</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='Aside' sx={{width: '340px', fontSize: '13px'}}>
                            <Box className='shopCartFixed' sx={{width: '340px', top: 0, left: 'auto', bottom: 'auto',}}>
                                <Typography variant="body2" color="initial" sx={{marginBottom: '8px', color: '#1a1a1a', fontSize: '18px', fontWeight: '700' }}>Order Summary</Typography>
                                <Box className='containerCuponAndTotal' sx={{backgroundColor: '#f7f7f7', marginBottom: '16px', padding: '16px'}}>
                                    <Box className='subcontainerCuponAndTotal'>
                                        <Box className='inputDiscount' sx={{width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch'}}>
                                            <Box sx={{width: '100%', marginBottom: '16px'}}>
                                                <Box sx={{display: 'flex', flexDirection: 'row' , flexWrap: 'wrap', alignItems: 'center'}}>
                                                    <Box sx={{marginBottom: '8px', display: 'flex', alignItems: 'center', cursor: 'pointer',
                                                    padding: 0}}>
                                                        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', flex: '1 1 0', maxWidth: '100%'}}>
                                                            <Typography variant='caption' style={{flex: '0 0 auto', maxWidth: '100%', padding: '3px', width: '16px', height: '16px', border: '1px solid #ccc', borderRadius: '50%', backgroundColor: '#fff', margin: 0}}></Typography>
                                                            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center', flex: '1 1 0', maxWidth: '100%', margin: '0 4px'}}>
                                                                <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', lineHeight: 1, verticalAlign: 'middle' }}>
                                                                    <Typography variant="caption" color="initial" sx={{fontSize: '13px', fontWeight: '300', lineHeight: 1}}>Coupon discount</Typography>
                                                                    <HelpOutlineIcon style={{fontSize: '13px', color: '#999', margin: '0 4px'}}/>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box className='inputAndBtnAplly' sx={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                                                    <Box sx={{width: '16px', margin: '0'}}></Box>
                                                    <Box sx={{display: 'flex', flexWrap: 'wrap',alignItems: 'center', flex: '1 1 0', maxWidth: '100%', margin: '0 4px'}}>
                                                        <Box sx={{flex: '1 1 0',    maxWidth: '100%', position: 'relative'}}>
                                                            <input type='text' className='couponSelectInput' style={{height: '26px',margin: 0, width: '100%', padding: '1px 4px', lineHeight: '22px', border: '1px solid #e6e6e6',     outline: 'none'}}/>
                                                        </Box>
                                                        <Link className='btn-secondary' style={{margin: 0, borderRadius: 0, display: 'inline-block', border: '1px solid transparent', verticalAlign: 'middle', textAlign: 'center', transition: 'color 0.2s ease-in-out,background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out',backgroundColor: '#333', color: '#fff', minWidth: '60px', height: '26px', cursor: 'pointer', padding: 0, lineHeight: '24px', fontSize: '14px' }}>Apply</Link>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: 'row' , flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px'}}>
                                            <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer',
                                            padding: 0}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', flex: '1 1 0', maxWidth: '100%'}}>
                                                    <Typography variant='caption' style={{flex: '0 0 auto', maxWidth: '100%', padding: '3px', width: '16px', height: '16px', border: '1px solid #ccc', borderRadius: '50%', backgroundColor: '#fff', margin: 0}}></Typography>
                                                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center', flex: '1 1 0', maxWidth: '100%', margin: '0 4px'}}>
                                                        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', lineHeight: 1, verticalAlign: 'middle' }}>
                                                            <Typography variant="caption" color="initial" sx={{fontSize: '13px', fontWeight: '300', lineHeight: 1}}>Do not use any discount</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{padding: '0 20px', backgroundColor: '#fff'}}>
                                            <Box sx={{color: '#666', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '15px 0'}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                                                    <Typography variant="body2" color="initial" sx={{fontSize: '14px', color: '#666', lineHeight: 1.5, margin: 0, padding: 0}}>Subtotal :</Typography>
                                                </Box>
                                                <Box sx={{color: '#1a1a1a'}}>
                                                    <Typography variant="caption" sx={{fontWeight: '700'}}>${subtotal.toFixed(2)}</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{color: '#666', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px dashed #e6e6e6'}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                                                    <Typography variant="body2" color="initial" sx={{fontSize: '14px', color: '#666', lineHeight: 1.5, margin: 0, padding: 0}}>Taxes :</Typography>
                                                </Box>
                                                <Box sx={{color: '#1a1a1a'}}>
                                                    <Typography variant="caption" sx={{fontWeight: '700'}}>+${taxes.toFixed(2)}</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{color: '#666', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0'}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                                                    <Typography variant="body2" color="initial" sx={{fontSize: '16px', lineHeight: '1.5',fontWeight: 700, color: '#1a1a1a'}}>Total :</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="caption" color="initial" sx={{fontSize: '24px', fontWeight: 700, color: '#e30044'}}>${total.toFixed(2)}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='containerBtnProceed' sx={{overflow: 'hidden'}}>
                                    <Box sx={{marginBottom: '16px',}}>
                                        <Link onClick={register} className='btn btnPrimary' style={{margin: 0, borderRadius: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', border: '1px solid transparent', verticalAlign: 'middle', textAlign: 'center', lineHeight: '1.5', transition: 'color 0.2s ease-in-out,background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out', width: '100%', color: '#fff', backgroundColor: '#e30044', cursor: 'pointer', padding: 0, height: '56px', fontSize: '20px'}}>Proceed to checkout</Link>
                                    </Box>
                                </Box>
                                <Box className='containerWeAccept'>
                                    <Typography variant="body2" color="initial" sx={{fontSize: '13px', marginBottom: '8px'}}>We Accept:</Typography>
                                    <Box className='imagesWeAccept' sx={{margin: '0 -4px 6px', display: 'flex', flexWrap: 'wrap'}}>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/PayPal.png' alt='PayPal' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/visa.png' alt='Visa' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/MasterCard.png' alt='MasterCard' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/mada.png' alt='Mada' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/xoox.png' alt='OXXO' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/boleto.png' alt='Boleto' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/sofort.png' alt='Sofort' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/deil.png' alt='Deil' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/upi.png' alt='Upi' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/rupay.png' alt='RuPay' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/cod.png' alt='COD' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/Parcelamento.png' alt='Parcelamento' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/afterpay.png' alt='Afterpay' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/footer/pc-mnp-1x.png' alt='PC-MNP' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/clearpay.png' alt='ClearPay' />
                                        </Box>
                                    </Box>
                                    <ul className='detailsWeAccept' style={{ listStyleType: 'disc', listStylePosition: 'inside', color: '#999'}}>
                                        <li style={{display: 'list-item', lineHeight: 1.5, margin: 0, padding: 0}}>Safety and various payment methods</li>
                                        <li style={{display: 'list-item', lineHeight: 1.5, margin: 0, padding: 0}}>Faster,Professional dispute resolution</li>
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {
                        openModal && <ModalUserRegister open={openModal} handleClose={handleCloseModal} />
                    }
                </Container>
                <Container className='containerCart' style={{margin: 0, padding: 0, maxWidth: '100%'}}>
                    <Box className='containerSecureBtn' sx={{width: '100%',borderBottom: '1px solid #e5e5e5'}}>
                        <Box className='subcontainerSecureAndBtn' sx={{maxWidth: '1530PX', minWidth: '916px', width: '100%', height: '56px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto',   marginRight: 'auto', paddingLeft: '12px', paddingRight: '12px'}}>
                            <Box className="checkoutContainer" sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '22px', lineHeight: '22px', paddingRight: '8px', paddingLeft: '8px', marginLeft: '16px', marginRight: '16px'}}>
                                <GppGoodIcon sx={{color: '#669933', fontSize: '14px',verticalAlign: 'middle'}}/>
                                <Typography variant="h6" color="#669933" sx={{fontSize: '14px', marginLeft: '4px', marginRight: '4px'}}>Secure Checkout</Typography>
                            </Box>
                            <Box className='btnContinueShopping'>
                                <Link to={'/Category/Shop'} style={{color: '#333', margin: '0 16px'}}>Continue Shopping <ArrowForwardIosIcon sx={{fontSize: '14px', verticalAlign: 'middle'}}/></Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='containerStepper' sx={{maxWidth: '1530px', minWidth: '916px', width: '100%', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '12px', paddingRight: '12px'}}>
                        <Box className='subcontainerStepper' sx={{height: '87px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center',alignItems: 'center',}}>
                            <Box className='stepperOne'>
                                <ShoppingCartOutlinedIcon sx={{fontSize: '16px', color: '#333'}}/>
                                <Typography variant="caption" color="initial" sx={{margin: '0 4px', verticalAlign: 'middle', fontSize: '16px'}}>Shopping Cart</Typography>
                            </Box>
                            <Box className='line' sx={{width: '67px', height: '1px', backgroundColor: '#333', margin: '0 0.16rem'}}></Box>
                            <Box className='stepperTwo'>
                                <ListAltIcon sx={{fontSize: '16px', color: '#ccc'}}/>
                                <Typography variant="caption" color="#ccc" sx={{margin: '0 4px', verticalAlign: 'middle', fontSize: '16px'}}>Place Order</Typography>
                            </Box>
                            <Box className='lineTwo' sx={{width: '67px', height: '1px', backgroundColor: '#ccc', margin: '0 0.16rem'}}></Box>
                            <Box className='stepperThree'>
                                <PaymentIcon sx={{fontSize: '16px', color: '#ccc'}}/>
                                <Typography variant="caption" color="#ccc" sx={{margin: '0 4px', verticalAlign: 'middle', fontSize: '16px'}}>Pay</Typography>
                            </Box>
                            <Box className='lineThree' sx={{width: '67px', height: '1px', backgroundColor: '#ccc', margin: '0 0.16rem'}}></Box>
                            <Box className='stepperFour'>
                                <DomainVerificationIcon sx={{fontSize: '16px', color: '#ccc'}}/>
                                <Typography variant="caption" color="#ccc" sx={{margin: '0 4px', verticalAlign: 'middle', fontSize: '16px'}}>Order Complete</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='containerTableAndAside' sx={{width: '1255px', maxWidth: '1530px', minWidth: '920px', margin: '0 auto', paddingLeft: '12px', paddingRight: '12px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box className='containerTableProducts' sx={{width: '70%'}}>
                            <Box className='containerAddOnItem' sx={{height: '156px',}}>
                                <Box className='subcontainerAddOnItem'>
                                    <Box className='containerFreeShipping' sx={{backgroundColor: '#f2faf3', padding: '16px 20px', marginBottom: '16px', flex: '0 0  100%', maxWidth: '100%'}}>
                                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Box sx={{display: 'flex', flexWrap: 'wrap', flex: '1 1 0', maxWidth: '100%'}}>
                                                <Box className='iconFree'>
                                                    <LocalShippingOutlinedIcon sx={{color: '#333'}}/>
                                                </Box>
                                                <Box className='textFree' sx={{margin: '0 4px', alignSelf: 'center'}}>
                                                    <Typography variant="body2" color="initial" sx={{textTransform: 'capitalize'}}>Free Shipping</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='containerAddOn' sx={{backgroundColor: '#f2faf3', padding: '16px 20px', marginBottom: '16px', flex: '0 0  100%', maxWidth: '100%'}}>
                                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Box sx={{display: 'flex', flexWrap: 'wrap', flex: '1 1 0', maxWidth: '100%'}}>
                                                <Box className='iconFree'>
                                                    <ShoppingCartOutlinedIcon sx={{color: '#333'}}/>
                                                </Box>
                                                <Box className='textAddOn' sx={{margin: '0 4px', alignSelf: 'center'}}>
                                                    <Typography variant="body2" color="initial" sx={{textTransform: 'capitalize'}}>Add-on Item</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='tableProducts'>
                                <Typography variant="body2" color="initial" sx={{fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#1a1a1a', lineHeight: 1.5}}>Shopping Bag ({Cart.length} items)</Typography>
                                <Box className='productContainerTop' sx={{fontSize: '13px', color: '#999', backgroundColor: '#f7f7f7', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', height: '40px'}}>
                                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '356px', lineHeight: 1.5}}>Item</Box>
                                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '144px', lineHeight: 1.5}}>Unit Price</Box>
                                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '144px', lineHeight: 1.5}}>Qty</Box>
                                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', padding: '0 16px', width: '145px', lineHeight: 1.5}}>Subtotal</Box>
                                </Box>
                                <Box className='shopCartProducts'>
                                    <Box sx={{border: 'none'}}>
                                        <Box sx={{fontSize: '13px'}}>
                                            {Cart.map((product) => {
                                                return (
                                                    <Box key={product.id + product.size} className='containerProduct' sx={{paddingTop: '4px', borderBottom: '1px solid #e5e5e5'}}>
                                                        <Box className='subcontainerProduct' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px 0 15px'}}>
                                                            <Box className='containerBoxImage' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', width: '125px'}}>
                                                                <Box className='checkbox' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '36px', height: '127px'}}>
                                                                    <Checkbox defaultChecked/>
                                                                </Box>
                                                                <Link className='imageProduct' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '91px', height: '127px', position: 'relative'}}>
                                                                    <Box key={product.id + product.size} sx={{margin: 0, padding: 0, position: 'relative', width: '100%', height: '100%'}}>
                                                                        <img key={product.id + product.size} src={product.image} alt={product.name} style={{maxWidth: '100%', height: 'auto', width: '100%'}}/>
                                                                    </Box>
                                                                </Link>
                                                            </Box>
                                                            <Box key={product.id + product.size} className='containerDetailsProduct' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 1}}>
                                                                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: 1}}>
                                                                    <Box className='containerItemProduct' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center',width: '232px'}}>
                                                                        <Box sx={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-between', flex: '1 1 0', maxWidth: '100%', padding: '0 16px'}}>
                                                                            <Box className='containerNameSize'>
                                                                                <Typography variant="body2" color="initial" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>
                                                                                    <Link key={product.id + product.size} style={{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', color: '#999', }}>
                                                                                        {product.name}
                                                                                    </Link>
                                                                                </Typography>
                                                                                <Typography variant="body2" color="#999" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>Size: {product.size}</Typography>
                                                                            </Box>
                                                                            <Box className='containerDeleteWish' sx={{paddingBottom: '7px'}}>
                                                                                <Link onClick={() => {removeItem(product.id)}} style={{color: '#999', cursor: 'pointer', textDecoration: 'underline'}}>Delete</Link>
                                                                                <Link style={{color: '#999', cursor: 'pointer', textDecoration: 'underline', margin: '0 16px'}}>Save in wishlist</Link>
                                                                            </Box>
                                                                        </Box>
                                                                    </Box>
                                                                    <Box className='containerUnitPrice' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', width: '144px'}}>
                                                                        <Box className='productPrice' sx={{direction: 'ltr', display: 'inline-block', fontSize: '16px', lineHeight: 1.5, letterSpacing: '.8px'}}>
                                                                            ${product.price}
                                                                        </Box>
                                                                    </Box>
                                                                    <Box className='containerQty' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '144px'}}>
                                                                        <Counter id={product.id} newQuantity={newQuantity}/>
                                                                    </Box>
                                                                    <Box className='containerSubtotalProduct' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', padding: '0 16px', width: '145px', color: '#1a1a1a'}}>
                                                                        <Typography variant="body2" color="initial" sx={{m: 0, p: 0, display: 'inline-block', direction: 'ltr', fontSize: '16px', lineHeight: 1.5, fontWeight: '700'}}>${(product.price * product.quantity).toFixed(2)}</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='containerBottomTable' sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', borderBottom: '1px solid #e5e5e5', height: '46px'}}>
                                    <Box className='containerCheckbox' sx={{margin: '0 -8px', position:'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', width: 'auto'}}>
                                        <Box sx={{display: 'flex', alignItems: 'center', padding: '0 6px', cursor: 'pointer', fontSize: '14px', lineHeight: '1.5', color: '#333'}}>
                                            <Box className='checkboxSelectAll' sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', flex: ' 0 0 auto', maxWidth: '100%'}}>
                                                <Checkbox />
                                                <Box className='selectAll' sx={{fontSize: '13px', lineHeight: 1.5, color: '#333', cursor: 'pointer', display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 4px'}}>
                                                    Select all
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='containerDelete' sx={{flex: '1 1 0', maxWidth: '100%'}} onClick={clearCart}>
                                        <Typography variant="caption" color="initial" sx={{margin: '0 16px', color: '#999', textDecoration: 'underline', fontSize: '13px', cursor: 'pointer', lineHeight: 1.5}}>Delete All</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='Aside' sx={{width: '340px', fontSize: '13px'}}>
                            <Box className='shopCartFixed' sx={{width: '340px', top: 0, left: 'auto', bottom: 'auto',}}>
                                <Typography variant="body2" color="initial" sx={{marginBottom: '8px', color: '#1a1a1a', fontSize: '18px', fontWeight: '700' }}>Order Summary</Typography>
                                <Box className='containerCuponAndTotal' sx={{backgroundColor: '#f7f7f7', marginBottom: '16px', padding: '16px'}}>
                                    <Box className='subcontainerCuponAndTotal'>
                                        <Box className='inputDiscount' sx={{width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch'}}>
                                            <Box sx={{width: '100%', marginBottom: '16px'}}>
                                                <Box sx={{display: 'flex', flexDirection: 'row' , flexWrap: 'wrap', alignItems: 'center'}}>
                                                    <Box sx={{marginBottom: '8px', display: 'flex', alignItems: 'center', cursor: 'pointer',
                                                    padding: 0}}>
                                                        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', flex: '1 1 0', maxWidth: '100%'}}>
                                                            <Typography variant='caption' style={{flex: '0 0 auto', maxWidth: '100%', padding: '3px', width: '16px', height: '16px', border: '1px solid #ccc', borderRadius: '50%', backgroundColor: '#fff', margin: 0}}></Typography>
                                                            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center', flex: '1 1 0', maxWidth: '100%', margin: '0 4px'}}>
                                                                <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', lineHeight: 1, verticalAlign: 'middle' }}>
                                                                    <Typography variant="caption" color="initial" sx={{fontSize: '13px', fontWeight: '300', lineHeight: 1}}>Coupon discount</Typography>
                                                                    <HelpOutlineIcon style={{fontSize: '13px', color: '#999', margin: '0 4px'}}/>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box className='inputAndBtnAplly' sx={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                                                    <Box sx={{width: '16px', margin: '0'}}></Box>
                                                    <Box sx={{display: 'flex', flexWrap: 'wrap',alignItems: 'center', flex: '1 1 0', maxWidth: '100%', margin: '0 4px'}}>
                                                        <Box sx={{flex: '1 1 0',    maxWidth: '100%', position: 'relative'}}>
                                                            <input type='text' className='couponSelectInput' style={{height: '26px',margin: 0, width: '100%', padding: '1px 4px', lineHeight: '22px', border: '1px solid #e6e6e6',     outline: 'none'}}/>
                                                        </Box>
                                                        <Link className='btn-secondary' style={{margin: 0, borderRadius: 0, display: 'inline-block', border: '1px solid transparent', verticalAlign: 'middle', textAlign: 'center', transition: 'color 0.2s ease-in-out,background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out',backgroundColor: '#333', color: '#fff', minWidth: '60px', height: '26px', cursor: 'pointer', padding: 0, lineHeight: '24px', fontSize: '14px' }}>Apply</Link>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: 'row' , flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px'}}>
                                            <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer',
                                            padding: 0}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', flex: '1 1 0', maxWidth: '100%'}}>
                                                    <Typography variant='caption' style={{flex: '0 0 auto', maxWidth: '100%', padding: '3px', width: '16px', height: '16px', border: '1px solid #ccc', borderRadius: '50%', backgroundColor: '#fff', margin: 0}}></Typography>
                                                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center', flex: '1 1 0', maxWidth: '100%', margin: '0 4px'}}>
                                                        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', lineHeight: 1, verticalAlign: 'middle' }}>
                                                            <Typography variant="caption" color="initial" sx={{fontSize: '13px', fontWeight: '300', lineHeight: 1}}>Do not use any discount</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{padding: '0 20px', backgroundColor: '#fff'}}>
                                            <Box sx={{color: '#666', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '15px 0'}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                                                    <Typography variant="body2" color="initial" sx={{fontSize: '14px', color: '#666', lineHeight: 1.5, margin: 0, padding: 0}}>Subtotal :</Typography>
                                                </Box>
                                                <Box sx={{color: '#1a1a1a'}}>
                                                    <Typography variant="caption" sx={{fontWeight: '700'}}>${subtotal.toFixed(2)}</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{color: '#666', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px dashed #e6e6e6'}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                                                    <Typography variant="body2" color="initial" sx={{fontSize: '14px', color: '#666', lineHeight: 1.5, margin: 0, padding: 0}}>Taxes :</Typography>
                                                </Box>
                                                <Box sx={{color: '#1a1a1a'}}>
                                                    <Typography variant="caption" sx={{fontWeight: '700'}}>+${taxes.toFixed(2)}</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{color: '#666', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0'}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                                                    <Typography variant="body2" color="initial" sx={{fontSize: '16px', lineHeight: '1.5',fontWeight: 700, color: '#1a1a1a'}}>Total :</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="caption" color="initial" sx={{fontSize: '24px', fontWeight: 700, color: '#e30044'}}>${total.toFixed(2)}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='containerBtnProceed' sx={{overflow: 'hidden'}}>
                                    <Box sx={{marginBottom: '16px',}}>
                                        <Link onClick={register} className='btn btnPrimary' style={{margin: 0, borderRadius: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', border: '1px solid transparent', verticalAlign: 'middle', textAlign: 'center', lineHeight: '1.5', transition: 'color 0.2s ease-in-out,background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out', width: '100%', color: '#fff', backgroundColor: '#e30044', cursor: 'pointer', padding: 0, height: '56px', fontSize: '20px'}}>Proceed to checkout</Link>
                                    </Box>
                                </Box>
                                <Box className='containerWeAccept'>
                                    <Typography variant="body2" color="initial" sx={{fontSize: '13px', marginBottom: '8px'}}>We Accept:</Typography>
                                    <Box className='imagesWeAccept' sx={{margin: '0 -4px 6px', display: 'flex', flexWrap: 'wrap'}}>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/PayPal.png' alt='PayPal' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/visa.png' alt='Visa' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/MasterCard.png' alt='MasterCard' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/mada.png' alt='Mada' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/xoox.png' alt='OXXO' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/boleto.png' alt='Boleto' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/sofort.png' alt='Sofort' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/deil.png' alt='Deil' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/upi.png' alt='Upi' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/rupay.png' alt='RuPay' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/cod.png' alt='COD' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/Parcelamento.png' alt='Parcelamento' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/afterpay.png' alt='Afterpay' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/footer/pc-mnp-1x.png' alt='PC-MNP' />
                                        </Box>
                                        <Box className='officialPartnerLogo'>
                                            <img src='https://static.chiccdn.com/web/assets/images/cart-prdview-bank/clearpay.png' alt='ClearPay' />
                                        </Box>
                                    </Box>
                                    <ul className='detailsWeAccept' style={{ listStyleType: 'disc', listStylePosition: 'inside', color: '#999'}}>
                                        <li style={{display: 'list-item', lineHeight: 1.5, margin: 0, padding: 0}}>Safety and various payment methods</li>
                                        <li style={{display: 'list-item', lineHeight: 1.5, margin: 0, padding: 0}}>Faster,Professional dispute resolution</li>
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {
                        openModal && <ModalUserRegister open={openModal} handleClose={handleCloseModal} />
                    }
                </Container>
                <Container className="containerSpecialProducts">
                    <Box className="container containerOffPadding">
                        <Box className='titleProducts' sx={{width: '1255px', margin:'38px auto 0', padding: '0 12px', textAlign: 'left'}}>
                            <Typography variant="h2" color="#0B2746" sx={{fontSize: '36px', position: 'relative', fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase'}}>You May Also like:</Typography>
                        </Box>
                        <Box className='containerProducts' sx={{width: '1255px', margin:'0 75px 48px'}}>
                            <Service only={''} start={30} end={34}/>
                        </Box>
                    </Box>
                </Container>
                <Newsletter/>
                </>
            }
        </>
    )
}