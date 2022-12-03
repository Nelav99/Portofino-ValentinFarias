import { Box, Container, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ServiceBanner from '../HomePage/ServiceBanner';
import { ContextGlobal } from '../../ContextContainer';
import ModalConfirmOrder from '../GeneralComponents/ModalConfirmOrder';
import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';

const newDay = new Date();
const day = newDay.toLocaleDateString('en-US');
const time = newDay.toLocaleTimeString('en-US');

export default function Checkout() {
    const {clearCart, Cart, User} = useContext(ContextGlobal);
    const [subtotal, setSubtotal] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [total, setTotal] = useState(0);
    const [idOrder, setIdOrder] = useState('');
    const [openModal, setOpen] = React.useState(false);
    const handleOpenModal = () => {
        setOpen(true)
        handleCreateOrder();
    };
    const handleCloseModal = () => {
        setOpen(false);
        window.location = '/';
        clearCart();
    };

    const check = () => {
        let prices = Cart.map(item => item.price * item.quantity)
        setSubtotal(Number(prices.reduce((acc, el) => acc + el, 0).toFixed(2)));
        setTaxes(Number((subtotal * 0.21).toFixed(2)));
        setTotal(Number((subtotal + taxes).toFixed(2)));
    }

    const handleCreateOrder = () => {
        const order = {
            buyer: {...User},
            items: Cart.map(product => ({id: product.id, name: product.name, quantity: product.quantity, size: product.size, price: product.price})),
            total,
        }

        const db = getFirestore();
        const orderCollection = collection(db, 'Orders');

        addDoc(orderCollection, order)
            .then(({id}) => {
                setIdOrder(id);
            })

            Cart.forEach((product => {
                const documentDB = doc(db, 'Products', product.id);
                updateDoc(documentDB, {stock: increment(-product.quantity)});
            }))
    }

    useEffect(() => {
        check()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Cart, subtotal, taxes, total])

    return (
        <>
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
                    <Box className='containerOrder' style={{width: '1005px', margin: '0 auto', padding: '0 12px', marginTop: '32px'}} >
                        <Box sx={{display: 'flex', flexWrap: 'wrap', margin: '0 -8px', paddingBottom: '33px'}}>
                            <Box sx={{flex: '1 1 0', maxWidth: '100%', margin: '0 8px'}}>
                                <Box className='orderDetails' sx={{backgroundColor: '#fff', marginBottom: '16px', padding: '16px 25px', boxShadow: '0px 10px 25px rgb(0 0 0 / 15%)'}}>
                                    <Box className='orderHeader' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e6e6e6'}}>
                                        <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', listStyle: 'none', m: 0, p: 0}}>
                                            <li className='orderInformation' style={{m: 0, padding: '0 8px', fontWeight: 'bold', transition: 'all .5s', lineHeight: '42px', cursor:'pointer', position: 'relative', color: '#333'}}>Order Information</li>
                                        </ul>
                                    </Box>
                                    <Box className='contentOrder' sx={{display:'block'}}>
                                        <ul className='orderInfo' style={{display: 'block', m: 0, padding: '16px 0 16px 16px', listStyle: 'none', position: 'relative', width: '100%', borderBottom: '1px solid #e6e6e6'}}>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Date:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{`${day} ${time}`}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Customer's name:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.firstName + ' ' + User.lastName}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Phone:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.phone}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Email:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.email}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Shipping Address:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.address}</Typography>
                                            </li>
                                        </ul>
                                        <Box style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' ,alignItems: 'center', p: 0, m: 0, marginTop: '16px'}}>
                                            <Link onClick={handleOpenModal} className='btn btnPrimary' style={{color: '#fff', padding: '8px 20px', borderRadius: '5px'}}>Confirm My Order</Link>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='containerProductsInformation' sx={{backgroundColor: '#fff', marginBottom: '32px', padding: '16px 25px', boxShadow: '0px 10px 25px rgb(0 0 0 / 15%)'}}>
                                    <Typography variant="body2" color="#333" sx={{fontSize: '14px', fontWeight: 'bold',lineHeight: '42px', m: 0, p: 0}}>Product information</Typography>
                                    <Box className='containerTableProducts' sx={{width: '100%'}}>
                                        <Box className='tableProducts'>
                                            <Box className='productContainerTop' sx={{fontSize: '13px', color: '#999', backgroundColor: '#f7f7f7', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', height: '40px'}}>
                                                <Box className='tableTopProduct' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '356px', lineHeight: 1.5}}>Product</Box>
                                                <Box className='tableTopId' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '144px', lineHeight: 1.5}}>ID</Box>
                                                <Box className='tableTopQuantity' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '144px', lineHeight: 1.5}}>Quantity</Box>
                                                <Box className='tableTopUnitPrice' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '144px', lineHeight: 1.5}}>Unit Price</Box>
                                            </Box>
                                            <Box className='shopCartProducts'>
                                                <Box sx={{border: 'none'}}>
                                                    <Box sx={{fontSize: '13px'}}>
                                                        {Cart.map((product) => {
                                                            return (
                                                                <Box key={product.id} className='containerProduct' sx={{paddingTop: '4px', borderBottom: '1px solid #e5e5e5'}}>
                                                                    <Box className='subcontainerProduct' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px 0 15px'}}>
                                                                        <Box className='containerBoxImage' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', width: '125px'}}>
                                                                            <Link className='imageProduct' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '91px', height: '127px', position: 'relative'}}>
                                                                                <Box key={product.id} sx={{margin: 0, padding: 0, position: 'relative', width: '100%', height: '100%'}}>
                                                                                    <img key={product.id} src={product.image} alt={product.name} style={{maxWidth: '100%', height: 'auto', width: '100%'}}/>
                                                                                </Box>
                                                                            </Link>
                                                                        </Box>
                                                                        <Box key={product.id} className='containerDetailsProduct' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 1}}>
                                                                            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: 1}}>
                                                                                <Box className='containerItemProduct' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center',width: '232px'}}>
                                                                                    <Box sx={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-between', flex: '1 1 0', maxWidth: '100%', padding: '0 16px'}}>
                                                                                        <Box className='containerNameSize'>
                                                                                            <Typography variant="body2" color="initial" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>
                                                                                                <Link key={product.id} style={{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', color: '#999' }}>
                                                                                                    {product.name}
                                                                                                </Link>
                                                                                            </Typography>
                                                                                            <Typography variant="body2" color="#999" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>Size: {product.size}</Typography>
                                                                                        </Box>
                                                                                    </Box>
                                                                                </Box>
                                                                                <Box className='containerUnitPrice' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', width: '144px', overflow: 'hidden', paddingTop: '30px'}}>
                                                                                    <Box className='productPrice' sx={{direction: 'ltr', display: 'inline-block', fontSize: '16px', lineHeight: 1.5, letterSpacing: '.8px'}}>
                                                                                        {product.id}
                                                                                    </Box>
                                                                                </Box>
                                                                                <Box className='containerQty' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '144px', paddingTop: '30px'}}>
                                                                                    <Box className='productQty' sx={{direction: 'ltr', display: 'inline-block', fontSize: '16px', lineHeight: 1.5, letterSpacing: '.8px'}}>
                                                                                        x{product.quantity}
                                                                                    </Box>
                                                                                </Box>
                                                                                <Box className='containerUnitPrice' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', width: '144px', paddingTop: '30px'}}>
                                                                                    <Box className='productPrice' sx={{direction: 'ltr', display: 'inline-block', fontSize: '16px', lineHeight: 1.5, letterSpacing: '.8px'}}>
                                                                                        ${product.price}
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
                                        </Box>
                                    </Box>
                                    <Box className='containerAccountSummary' sx={{textAlign: 'right', color: '#999', borderTop: '1px solid #e4e4e4', borderBottom: '1px solid #e4e4e4', padding: '16px', marginBottom: '16px'}}>
                                        <ul>
                                            <li className='subtotalSummary' style={{m: 0, p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '4px'}}>
                                                <Box sx={{flex: '0 0 87.5%', maxWidth: '87.5%', fontSize: '14px', lineHeight: '1.5', color: '#999'}}>
                                                    Sub-Total:
                                                </Box>
                                                <Box sx={{flex: '0 0 12.5%', maxWidth: '12.5%'}}>
                                                    <Typography variant="caption" color="#333" sx={{fontSize: '14px', lineHeight: '1.5'}}>${subtotal}</Typography>
                                                </Box>
                                            </li>
                                            <li className='subtotalSummary' style={{m: 0, p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '4px'}}>
                                                <Box sx={{flex: '0 0 87.5%', maxWidth: '87.5%', fontSize: '14px', lineHeight: '1.5', color: '#999'}}>
                                                    Taxes:
                                                </Box>
                                                <Box sx={{flex: '0 0 12.5%', maxWidth: '12.5%'}}>
                                                    <Typography variant="caption" color="#333" sx={{fontSize: '14px', lineHeight: '1.5'}}>+${taxes}</Typography>
                                                </Box>
                                            </li>
                                            <li className='subtotalSummary' style={{m: 0, p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '4px'}}>
                                                <Box sx={{flex: '0 0 87.5%', maxWidth: '87.5%', fontSize: '14px', lineHeight: '1.5', color: '#999'}}>
                                                    Total:
                                                </Box>
                                                <Box sx={{flex: '0 0 12.5%', maxWidth: '12.5%'}}>
                                                    <Typography variant="caption" color="#e30044" sx={{fontSize: '18px', fontWeight: 'bold', lineHeight: '1.5'}}>${total}</Typography>
                                                </Box>
                                            </li>
                                        </ul>
                                    </Box>
                                    <Box style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' ,alignItems: 'center', p: 0, m: 0, marginTop: '16px'}}>
                                        <Link onClick={handleOpenModal} className='btn btnPrimary' style={{color: '#fff', padding: '8px 20px', borderRadius: '5px'}}>Confirm My Order</Link>
                                    </Box>
                                    {
                                        openModal && <ModalConfirmOrder open={openModal} handleClose={handleCloseModal} clear={clearCart} idOrder={idOrder} />
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <ServiceBanner />
            </Container>
            <Container className='containerCart containerCheckout' style={{margin: 0, padding: 0, maxWidth: '100%'}}>
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
                    <Box className='containerOrder' style={{width: '100%', margin: '0 auto', padding: '0 12px', marginTop: '32px'}} >
                        <Box sx={{display: 'flex', flexWrap: 'wrap', margin: '0 -8px', paddingBottom: '33px'}}>
                            <Box sx={{flex: '1 1 0', maxWidth: '100%', margin: '0 8px'}}>
                                <Box className='orderDetails' sx={{backgroundColor: '#fff', marginBottom: '16px', padding: '16px 25px', boxShadow: '0px 10px 25px rgb(0 0 0 / 15%)'}}>
                                    <Box className='orderHeader' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e6e6e6'}}>
                                        <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', listStyle: 'none', m: 0, p: 0}}>
                                            <li className='orderInformation' style={{m: 0, padding: '0 8px', fontWeight: 'bold', transition: 'all .5s', lineHeight: '42px', cursor:'pointer', position: 'relative', color: '#333'}}>Order Information</li>
                                        </ul>
                                    </Box>
                                    <Box className='contentOrder' sx={{display:'block'}}>
                                        <ul className='orderInfo' style={{display: 'block', m: 0, padding: '16px 0 16px 16px', listStyle: 'none', position: 'relative', width: '100%', borderBottom: '1px solid #e6e6e6'}}>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Date:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{`${day} ${time}`}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Customer's name:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.firstName + ' ' + User.lastName}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Phone:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.phone}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Email:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.email}</Typography>
                                            </li>
                                            <li style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '4px', m: 0}}>
                                                <Box sx={{textAlign: 'left', flex: '0 0 16.66667%', color: '#999', display: 'inline-block', fontSize: '12px'}}>Shipping Address:</Box>
                                                <Typography variant="caption" color="#333" sx={{padding: '4px', verticalAlign: 'middle', textAlign: 'left', lineHeight: '20px', fontSize: '12px'}}>{User.address}</Typography>
                                            </li>
                                        </ul>
                                        <Box style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' ,alignItems: 'center', p: 0, m: 0, marginTop: '16px'}}>
                                            <Link onClick={handleOpenModal} className='btn btnPrimary' style={{color: '#fff', padding: '8px 20px', borderRadius: '5px'}}>Confirm My Order</Link>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='containerProductsInformation' sx={{backgroundColor: '#fff', marginBottom: '32px', padding: '16px 25px', boxShadow: '0px 10px 25px rgb(0 0 0 / 15%)'}}>
                                    <Typography variant="body2" color="#333" sx={{fontSize: '14px', fontWeight: 'bold',lineHeight: '42px', m: 0, p: 0}}>Product information</Typography>
                                    <Box className='containerTableProducts' sx={{width: '100%'}}>
                                        <Box className='tableProducts'>
                                            <Box className='productContainerTop' sx={{fontSize: '13px', color: '#999', backgroundColor: '#f7f7f7', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', height: '40px'}}>
                                                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '356px', lineHeight: 1.5}}>Products</Box>
                                            </Box>
                                            <Box className='shopCartProducts'>
                                                <Box sx={{border: 'none'}}>
                                                    <Box sx={{fontSize: '13px'}}>
                                                        {Cart.map((product) => {
                                                            return (
                                                                <Box key={product.id} className='containerProduct' sx={{paddingTop: '4px', borderBottom: '1px solid #e5e5e5'}}>
                                                                    <Box className='subcontainerProduct' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px 0 15px'}}>
                                                                        <Box className='containerBoxImage' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', width: '125px'}}>
                                                                            <Link className='imageProduct' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '91px', height: '127px', position: 'relative'}}>
                                                                                <Box key={product.id} sx={{margin: 0, padding: 0, position: 'relative', width: '100%', height: '100%'}}>
                                                                                    <img key={product.id} src={product.image} alt={product.name} style={{maxWidth: '100%', height: 'auto', width: '100%'}}/>
                                                                                </Box>
                                                                            </Link>
                                                                        </Box>
                                                                        <Box key={product.id} className='containerDetailsProduct' sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 1}}>
                                                                            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: 1}}>
                                                                                <Box className='containerItemProduct' sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center',width: '232px'}}>
                                                                                    <Box sx={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-between', flex: '1 1 0', maxWidth: '100%', padding: '0 16px'}}>
                                                                                        <Box className='containerNameSize'>
                                                                                            <Typography variant="body2" color="initial" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>
                                                                                                <Link key={product.id} to={product.id} style={{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', color: '#333' }}>
                                                                                                    {product.name}
                                                                                                </Link>
                                                                                            </Typography>
                                                                                            <Typography variant="body2" color="#999" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>Size: {product.size}</Typography>
                                                                                            <Typography variant="body2" color="#999" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>Unit Price: ${product.price}</Typography>
                                                                                            <Typography variant="body2" color="#999" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>Quantity: x{product.quantity}</Typography>
                                                                                            <Typography variant="body2" color="#999" sx={{fontSize: '16px', lineHeight: '16px', maxHeight: '32px', height: '32px', width: '222px', overflow: 'hidden'}}>Sub-Total: ${Number((product.price * product.quantity).toFixed(2))}</Typography>
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
                                        </Box>
                                    </Box>
                                    <Box className='containerAccountSummary' sx={{textAlign: 'right', color: '#999', borderTop: '1px solid #e4e4e4', borderBottom: '1px solid #e4e4e4', padding: '16px', marginBottom: '16px'}}>
                                        <ul>
                                            <li className='subtotalSummary' style={{m: 0, p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '4px'}}>
                                                <Box sx={{flex: '0 0 87.5%', maxWidth: '87.5%', fontSize: '14px', lineHeight: '1.5', color: '#999'}}>
                                                    Sub-Total:
                                                </Box>
                                                <Box sx={{flex: '0 0 12.5%', maxWidth: '12.5%'}}>
                                                    <Typography variant="caption" color="#333" sx={{fontSize: '14px', lineHeight: '1.5'}}>${subtotal}</Typography>
                                                </Box>
                                            </li>
                                            <li className='subtotalSummary' style={{m: 0, p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '4px'}}>
                                                <Box sx={{flex: '0 0 87.5%', maxWidth: '87.5%', fontSize: '14px', lineHeight: '1.5', color: '#999'}}>
                                                    Taxes:
                                                </Box>
                                                <Box sx={{flex: '0 0 12.5%', maxWidth: '12.5%'}}>
                                                    <Typography variant="caption" color="#333" sx={{fontSize: '14px', lineHeight: '1.5'}}>+${taxes}</Typography>
                                                </Box>
                                            </li>
                                            <li className='subtotalSummary' style={{m: 0, p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '4px'}}>
                                                <Box sx={{flex: '0 0 87.5%', maxWidth: '87.5%', fontSize: '14px', lineHeight: '1.5', color: '#999'}}>
                                                    Total:
                                                </Box>
                                                <Box sx={{flex: '0 0 12.5%', maxWidth: '12.5%'}}>
                                                    <Typography variant="caption" color="#e30044" sx={{fontSize: '18px', fontWeight: 'bold', lineHeight: '1.5'}}>${total}</Typography>
                                                </Box>
                                            </li>
                                        </ul>
                                    </Box>
                                    <Box style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' ,alignItems: 'center', p: 0, m: 0, marginTop: '16px'}}>
                                        <Link onClick={handleOpenModal} className='btn btnPrimary' style={{color: '#fff', padding: '8px 20px', borderRadius: '5px'}}>Confirm My Order</Link>
                                    </Box>
                                    {
                                        openModal && <ModalConfirmOrder open={openModal} handleClose={handleCloseModal} clear={clearCart} idOrder={idOrder} />
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <ServiceBanner />
            </Container>
        </>
    )
}
