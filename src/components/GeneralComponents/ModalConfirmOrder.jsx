import { Modal, Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
    width: '100%',
    padding: '24px',
    position: 'relative !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    pointerEvents: 'auto',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    outline: 0,
    transition: 'all 0.2s ease',
    minHeight: '5rem',
};

export default function ModalConfirmOrder({open, handleClose, clear, idOrder}) {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{transition: 'opacity 0.15s linear', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', outline: '0', overflowX: 'hidden', overflowY: 'auto', zIndex: '1060', display: 'block', margin: {sx: '0 10px'}, }}
            >
                <Box className='modalDialogue' sx={{position: 'relative', maxWidth: '508px', margin: '20px auto', display: 'flex', alignItems: 'center', minHeight: 'calc(100% - (20px * 2))', transition: 'transform 0.3s ease-out,-webkit-transform 0.3s ease-out', transform: 'none'}}>
                    <Box className='modalContent' sx={style}>
                        <Link to='/' style={{minWidth: '24px', margin: 0, borderRadius: 0, float: 'right', fontSize: '21px', fontWeight: 700, lineHeight: 1, textShadow: '0 1px 0 #fff', opacity: '.5', position: 'absolute', right: '5px', top: '3px', zIndex: 1, padding: 0, backgroundColor: 'transparent', border: 0, appearance: 'none', cursor: 'pointer'}} onClick={clear}>
                            <CloseIcon sx={{color: '#999'}}/>
                        </Link>
                        <Box className='ContainerDetails' sx={{
                        position: 'relative',
                        flex: '1 1 auto',
                        padding: '0 12px',
                        height: '100%'}}>
                            <Box className='titlesConfirm' sx={{margin: '16px 0'}}>
                                <CheckCircleIcon className='circleCheck' sx={{width: '56px', height: '56px', color: '#299211', fontSize: '0.5rem', lineHeight: 1,}}/>
                                <Typography id="modal-modal-title" variant="h5" sx={{fontSize: '28px', color: '#333', margin: '4px 0'}}>
                                    Your order has been confirmed
                                </Typography>
                                <Typography id="modal-modal-description" variant='body2' sx={{fontSize: '14px', fontWeight: 400, color: '#666', lineHeight: '25px', letterSpacing: '1.5', padding: '5px 35px'}}>
                                <strong>Order ID:</strong> {idOrder} <br/>
                                Your order is being prepared. <br/> In the following 24 hours you will receive a confirmation email with shipping details.
                                </Typography>
                            </Box>
                        </Box>
                        <Link to='/' onClick={clear} className='btn btnPrimary' style={{color: '#fff', padding: '8px 20px', borderRadius: '5px'}}>Accept</Link>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
