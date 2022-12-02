import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';
import SliderProducts from '../GeneralComponents/SliderProducts';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

export default function ModalConfirm({open, handleClose, only}) {
    const onlyFor = only;

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modalContent' sx={style}>
                    <Box className='containerBtnClose' sx={{display: 'flex',    alignItems: 'flex-start', justifyContent: 'center',     padding: '0.28rem 0.14rem 0.14rem'}}>
                        <Button className='close' sx={{borderRadius: 0, float: 'right', fontSize: '21px', fontWeight: 700, textShadow: '0 1px 0 #fff', opacity: '.5', backgroundColor: 'transparent', border: 0, appearance: 'none', position: 'absolute', top: 0, right: 0, padding: '0.07rem', lineHeight: '0.14rem', cursor: 'pointer', minWidth: 'auto', margin: '10px'}} onClick={handleClose}>
                            <CloseIcon sx={{color: '#999'}}/>
                        </Button>
                    </Box>
                    <Box className='ContainerDetails' sx={{
                        position: 'relative',
                        flex: '1 1 auto',
                        padding: '0 12px',
                        height: '100%'}}>
                        <Box className='titlesConfirm' sx={{marginBottom: '16.92px'}}>
                            <CheckCircleIcon className='circleCheck' sx={{width: '42px', height: '42px', color: '#299211', fontSize: '0.5rem', lineHeight: 1,}}/>
                            <Typography id="modal-modal-title" variant="h6" sx={{fontSize:'18px'}}>
                                Add to cart Successfully
                            </Typography>
                            <Typography id="modal-modal-description" sx={{fontSize: '13px', margin: 0, padding: 0, }}>
                                order $211.01 more enjoy free shipping <Link to={'/DetailsOfShop'} style={{color: '#333', fontSize: '13px', textDecoration: 'underline'}}>Detail</Link>
                            </Typography>
                        </Box>
                        <Box className='btnsGoToCart' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16.94px'}}>
                            <Link to={'/Category/Shop'} className='continueShopping' style={{
                                marginLeft: '0.05rem',
                                marginRight: '0.05rem',
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid #959090',
                                color: '#333',
                                backgroundColor: 'transparent',
                                fontSize: '14px',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                transition: 'color 0.2s ease-in-out,background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out',
                                cursor: 'pointer',
                                textTransform: 'none',
                                fontWeight: 400,
                                margin: '0 5px',
                                padding: '0 25.4px',
                                height: '36.95px'}}>
                                Continue Shopping
                            </Link>
                            <Link to={'/Cart'} className='viewCart btnPrimary' style={{
                                marginLeft: '0.05rem',
                                marginRight: '0.05rem',
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid transparent',
                                color: '#fff',
                                backgroundColor: '#e30044',
                                fontSize: '14px',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                transition: 'color 0.2s ease-in-out,background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out',
                                cursor: 'pointer',
                                textTransform: 'none',
                                fontWeight: 400,
                                margin: '0 5px',
                                padding: '0 25.4px',
                                height: '36.95px'}}>
                                View Cart & Checkout
                            </Link>
                        </Box>
                        <Box className='asloBought'>
                            <Typography variant="h3" color="initial" sx={{fontSize: '18px', textAlign: 'left', fontWeight: 900, margin: '15px 24px'}}>Who view this item also bought</Typography>
                            <SliderProducts only={onlyFor}/>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}