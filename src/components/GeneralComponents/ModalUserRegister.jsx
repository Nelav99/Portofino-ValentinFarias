import CloseIcon from '@mui/icons-material/Close';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControl, IconButton, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../ContextContainer';

const style = {
    paddingTop: '12px',
    position: 'relative !important',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    pointerEvents: 'auto',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    outline: 0,
    transition: 'all 0.2s ease',
    minHeight: '5rem',
};

const messages = {
    required: "This field is required.",
    name: "Invalid value: Please enter a valid value.",
    email: "Invalid email address: Please re-enter or contact customer service.",
    phone: "Invalid Number: Please enter a valid phone number.",
    password: "Invalid Password: Your password must have at least 8 characters. You cannot include symbols or special characters.",
};

const patterns = {
    name: /^[A-Za-z]+$/i,
    email:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[0-9]+$/i,
    password: /^[a-zA-Z0-9-]+$/i,
    address: "[a-zA-Z ]{2,254}",
};

export default function ModalUserRegister({open, handleClose}) {
    const { AddNewUser, Cart } = useCartContext();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [Password, setPassword] = useState('');
    const [Preference, setPreference] = useState('');
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChangeInput = (event) => {
        const {name, value} = event.target;
        setUserInfo({...userInfo, [name]: value})
    }

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword(event.target.value)
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const onSubmit = (userInfo) => {
        AddNewUser(userInfo, Password, Preference);
        if(Cart.length === 0) {
            window.location = '/';
        } else {
            window.location = '/Checkout';
        }
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{transition: 'opacity 0.15s linear', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', outline: '0', overflowX: 'hidden', overflowY: 'auto', zIndex: '1060', display: 'block'}}
            >
                <Box className='modalDialogue' sx={{position: 'relative', maxWidth: '508px', margin: '20px auto', display: 'flex', alignItems: 'center', minHeight: 'calc(100% - (20px * 2))', transition: 'transform 0.3s ease-out,-webkit-transform 0.3s ease-out', transform: 'none'}}>
                    <Box className='modalContent' sx={style}>
                        <Button sx={{minWidth: '24px', margin: 0, borderRadius: 0, float: 'right', fontSize: '21px', fontWeight: 700, lineHeight: 1, textShadow: '0 1px 0 #fff', opacity: '.5', position: 'absolute', right: '5px', top: '3px', zIndex: 1, padding: 0, backgroundColor: 'transparent', border: 0, appearance: 'none', cursor: 'pointer'}} onClick={handleClose}>
                            <CloseIcon sx={{color: '#999'}}/>
                        </Button>
                        <Box className='modalBody' sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            position: 'relative',
                            flex: '1 1 auto',
                            padding: '0 12px 12px',
                            height: '100%'}}>
                            <Box className='subContainerModalBody' sx={{flex: '0 0 auto', maxWidht: '100%'}}>
                                <Box className='singUpContainer' sx={{width: '485px', padding: '0 73px'}}>
                                    <Box className='titleRegister' sx={{alignItems: 'center', paddingTop: '12px', paddingBottom: '12px', display: 'inline-flex !important', minWidht: '100%'}}>
                                        <Typography variant="caption" color="#000" sx={{fontSize: '32px', fontWeight: 'bold', lineHeight: '1.5'}}>Register</Typography>
                                        <Box className='discountRegister' sx={{color: '#e30044', display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-start', flex: '1 1 0', maxWidht:'100%', margin: '0 12px', minHeight: '0.3rem', lineHeight: '1.3' }}>
                                            <Box className='discountBox' sx={{color: '#e30044', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '200px', padding: '0 0.2rem', height: '32px', lineHeight: '1.2', background: 'linear-gradient(265deg,rgba(242,128,90,.2) 0%,rgba(242,28,81,.2) 100%)',}}>
                                                10% OFF For New Users
                                            </Box>
                                        </Box>
                                    </Box>
                                    <form onSubmit={handleSubmit(onSubmit)} className='formRegister' style={{marginBottom: '25px'}}>
                                        <Box className='firstNameInput' sx={{width: '100%', position: 'relative !important', transition: 'all 0.3s linear', marginBottom: '12px'}}>
                                            <TextField
                                                required
                                                error={errors.firstName && true}
                                                helperText={errors.firstName && messages.name}
                                                name='firstName'
                                                type="text"
                                                className={errors.name && "error"}
                                                inputProps={{ inputMode: 'text', pattern: '[A-Za-z]*' }}
                                                {...register("firstName", {
                                                    required: messages.required,
                                                    pattern: {
                                                        value: patterns.name,
                                                        message: messages.name
                                                    }
                                                })}
                                                id="firstNamerequired"
                                                label="First Name"
                                                variant="standard"
                                                sx={{width: '100%'}}
                                                onChange={handleChangeInput}
                                            />
                                        </Box>
                                        <Box className='lastNameInput' sx={{width: '100%', position: 'relative !important', transition: 'all 0.3s linear', marginBottom: '12px'}}>
                                            <TextField
                                                required
                                                error={errors.lastName && true}
                                                helperText={errors.lastName && messages.name}
                                                name='lastName'
                                                type="text"
                                                {...register("lastName", {
                                                    required: messages.required,
                                                    pattern: {
                                                        value: patterns.name,
                                                        message: messages.name
                                                    }
                                                })}
                                                id="lastNameRequired"
                                                label="Last Name"
                                                variant="standard"
                                                sx={{width: '100%'}}
                                                onChange={handleChangeInput}
                                            />
                                        </Box>
                                        <Box className='phoneInput' sx={{width: '100%', position: 'relative !important', transition: 'all 0.3s linear', marginBottom: '12px'}}>
                                            <TextField
                                                required
                                                error={errors.phone && true}
                                                helperText={errors.phone && messages.phone}
                                                {...register("phone", {
                                                    required: messages.required,
                                                    minLength: {
                                                        value: 9,
                                                        message: messages.phone
                                                    },
                                                    maxLength: {
                                                        value: 10,
                                                        message: messages.phone
                                                    },
                                                    pattern: {
                                                        value: patterns.phone,
                                                        message: messages.phone
                                                    }
                                                })}
                                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                id="phoneRequired"
                                                label="Phone Number"
                                                name='phone'
                                                type="tel"
                                                variant="standard"
                                                sx={{width: '100%'}}
                                                onChange={handleChangeInput}
                                            />
                                        </Box>
                                        <Box className='emailInput' sx={{width: '100%', position: 'relative !important', transition: 'all 0.3s linear', marginBottom: '12px'}}>
                                            <TextField
                                                required
                                                error={errors.email && true}
                                                helperText={errors.email && messages.email}
                                                {...register("email", {
                                                    required: messages.required,
                                                    pattern: {
                                                        value: patterns.email,
                                                        message: messages.email
                                                    }
                                                })}
                                                id="emailRequired"
                                                label="E-mail Address"
                                                name='email'
                                                type="email"
                                                variant="standard"
                                                sx={{width: '100%'}}
                                                onChange={handleChangeInput}
                                            />
                                        </Box>
                                        <FormControl sx={{ width: '100%', marginBottom: '12px', }} variant="standard">
                                            <TextField
                                                required
                                                error={errors.password && true}
                                                helperText={errors.password && messages.password}
                                                {...register("password", {
                                                    required: messages.required,
                                                    minLength: {
                                                    value: 8,
                                                    message: messages.password
                                                    },
                                                    maxLength: {
                                                    value: 16,
                                                    message: messages.password
                                                    },
                                                    pattern: {
                                                        value: patterns.password,
                                                        message: messages.password
                                                    }
                                                })}
                                                label='Password'
                                                variant="standard"
                                                id="passwordRequired"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                InputProps={{
                                                    endAdornment:
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            >
                                                            {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                }}
                                            />
                                        </FormControl>
                                        <Box className='addressInput' sx={{width: '100%', position: 'relative !important', transition: 'all 0.3s linear', marginBottom: '12px'}}>
                                            <TextField
                                                required
                                                error={errors.address && true}
                                                helperText={errors.address && messages.name}
                                                {...register("address", {
                                                    required: messages.required,
                                                    pattern: {
                                                        value: patterns.address,
                                                        message: messages.name
                                                    }
                                                })}
                                                id="addressRequired"
                                                label="Shipping Address"
                                                name='address'
                                                type="text"
                                                variant="standard"
                                                sx={{width: '100%'}}
                                                onChange={handleChangeInput}
                                            />
                                        </Box>
                                        <Box className='checkboxTerms' sx={{paddingTop: '8px', display: 'block !important', position: 'relative', flex: 'wrap', alignItems: 'stretch', width: '100%'}}>
                                            <Box sx={{flex: '1 1 0', maxWidht: '100%', margin: '0 -4px', padding: '0 4px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                                <Box className='containerCheckbox' sx={{display: 'flex', flexWrap: 'nowrap', alignItems: 'center', flex: '1 1 0', maxWidth: '100%'}}>
                                                    <Checkbox required sx={{margin: 0, width: '16px', height: '16px', maxWidth: '100%', flex: '0 0 auto' }}/>
                                                    <Box sx={{fontSize: '12px', color: '#999', flex: '1 1 0', maxWidth: '100%', margin: '0 8px' }}>
                                                        I agree to Portofino
                                                        <Link to={'/Terms&Conditions'} style={{color: '#333', textDecoration: 'underline', paddingLeft: '4px'}}>
                                                            Terms & Conditions
                                                        </Link>
                                                        .
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className='checkboxPrivacy' sx={{marginTop: '4px', paddingTop: '8px', display: 'block !important', position: 'relative', flex: 'wrap', alignItems: 'stretch', width: '100%'}}>
                                            <Box sx={{flex: '1 1 0', maxWidht: '100%', margin: '0 -4px', padding: '0 4px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                                <Box className='containerCheckbox' sx={{display: 'flex', flexWrap: 'nowrap', alignItems: 'center', flex: '1 1 0', maxWidth: '100%'}}>
                                                    <Checkbox required sx={{margin: 0, width: '16px', height: '16px', maxWidth: '100%', flex: '0 0 auto' }}/>
                                                    <Box sx={{fontSize: '12px', color: '#999', flex: '1 1 0', maxWidth: '100%', margin: '0 8px' }}>
                                                        I agree to Portofino
                                                        <Link to={'/Terms&Conditions'} style={{color: '#333', textDecoration: 'underline', paddingLeft: '4px'}}>
                                                            Privacy Policy
                                                        </Link>
                                                        .
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className='checkboxNewsletter' sx={{position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', width: '100%'}}>
                                            <Box sx={{flex: '1 1 0', maxWidht: '100%', margin: '8px -4px', padding: '0 4px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                                <Box className='containerCheckbox' sx={{display: 'flex', flexWrap: 'nowrap', alignItems: 'center', flex: '1 1 0', maxWidth: '100%'}}>
                                                    <Checkbox sx={{margin: 0, width: '16px', height: '16px', maxWidth: '100%', flex: '0 0 auto' }}/>
                                                    <Box sx={{fontSize: '12px', color: '#999', flex: '1 1 0', maxWidth: '100%', margin: '0 8px' }}>
                                                        Follow us to get newest information and
                                                        <Link to={'/Terms&Conditions'} style={{color: '#333', padding: '0 4px'}}>
                                                            15% OFF
                                                        </Link>
                                                        coupon.
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{marginTop: '12px', marginBottom: '34px'}}>
                                            <Typography variant="body2" color="#333" sx={{m: 0, p: 0, paddingBottom: '4px', fontSize: '14px',fontWeight: 700, lineHeight: '1.5'}}> Style Preference:</Typography>
                                            <ul style={{m: 0, p: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', marginLeft: '-8px', marginRight: '-8px'}}>
                                                <li onClick={() => setPreference('Women')} style={{margin: '0 8px', p: 0, fontStyle: 'normal', flex: '1 1 0', maxWidth: '100%', height: '34px', lineHeight: '34px', textAlign: 'center', position: 'relative', fontSize: '12px', cursor: 'pointer', color: '#666', backgroundColor: '#f7f7f7'}}>
                                                    <FemaleIcon sx={{fontSize: '20px', fontStyle: 'normal', margin: '0 4px'}} />
                                                    Women Fashion
                                                </li>
                                                <li onClick={() => setPreference('Men')} style={{margin: '0 8px', p: 0, fontStyle: 'normal', flex: '1 1 0', maxWidth: '100%', height: '34px', lineHeight: '34px', textAlign: 'center', position: 'relative', fontSize: '11px', cursor: 'pointer', color: '#666', backgroundColor: '#f7f7f7'}}>
                                                    <MaleIcon sx={{fontSize: '20px', fontStyle: 'normal', margin: '0 4px'}} />
                                                    Men Fashion
                                                </li>
                                            </ul>
                                        </Box>
                                        <Button type='submit' className='btn btnPrimary btn-block' sx={{padding: '8px 12px', cursor: 'pointer', fontSize: '14px', marginBottom: '8px'}}>
                                            <Typography variant="caption" color="#fff" sx={{fontSize: '14px'}}>Register</Typography>
                                        </Button>
                                        <Typography variant="body2" color="#333" sx={{fontSize: '14px', lineHeight: '1.5' }}>
                                            Already have an account? <Link style={{cursor: 'pointer', color: '#0066cc', textDecoration: 'underline' }}>Sing in here</Link>
                                        </Typography>
                                    </form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}