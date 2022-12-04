import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Box, Button, IconButton, Snackbar, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiAlert from '@mui/material/Alert';
import { useCartContext } from '../../ContextContainer';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ItemCount({stock, initial, onAdd, porductId}) {
    const { Cart } = useCartContext();
    const [Count, setCount] = useState(parseInt(initial));
    const [Size, setSize] = useState('');
    const [selected, setSelected] = useState('');
    const [favorite, setFavorite] = useState({
        show: false,
    });
    const [Stock, setStock] = useState(stock);

    const handleClickAddFavorite= () => {
        setFavorite({
            show: !favorite.show,
        });
        handleSnackbar()
    };

    const handleMouseDownFavorite = (event) => {
        event.preventDefault();
    };

    function increase() {
        setCount(Count + 1);
    }

    function decrease(e) {
        setCount(Count - 1);
    }

    function availableStock() {
        if(Count >= Stock ) {
            return '¡No more Stock Availabel!'
        } else {
            return `Availabel Stock: ${Stock - Count}`
        }
    }

    const selectYourSize = (e) => {
        if(Size === '') {
            return '¡Please, select your size!'
        }
    }

    function selectSize(size) {
        setSize(size);
    }

    const handleSelected = (event, newSelected) => {
        setSelected(newSelected);
        event.preventDefault()
    };

    const [open, setOpen] = React.useState(false);

    const handleSnackbar = () => {
        setOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    useEffect(() => {
        if(Cart.length > 0) {
            if(Cart.find(item => item.id === porductId)) {
                setStock(Stock - Cart.find(item => item.id === porductId).quantity)
            }
        }
        setCount(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Cart])

    return (
        <>
            <Box className="selectSize">
                <Typography variant="h6" color="initial"> Select Your Size:</Typography>
                <ToggleButtonGroup className='toggleBtnContainer' direction="row" value={selected} exclusive onChange={handleSelected}>
                    <ToggleButton className='chipSize' value="XS" onClick={() => selectSize('XS')}>XS</ToggleButton>
                    <ToggleButton className='chipSize' value="S" aria-label="S" onClick={() => selectSize('S')}>S</ToggleButton>
                    <ToggleButton className='chipSize' value="M" aria-label="M" onClick={() => selectSize('M')}>M</ToggleButton>
                    <ToggleButton className='chipSize' value="L" aria-label="L" onClick={() => selectSize('L')} >L</ToggleButton>
                    <ToggleButton className='chipSize' value="XL" aria-label="XL" onClick={() => selectSize('XL')}>XL</ToggleButton>
                    <ToggleButton className='chipSize' value="XXL" aria-label="XXL" onClick={() => selectSize('XXL')}>XXL</ToggleButton>
                </ToggleButtonGroup>
                <Typography variant="subtitle2" color="initial" className='contAvailable'>{selectYourSize()}</Typography>
            </Box>
            <Box className="containerQuantity">
                <Typography variant="h6" color="initial">Quantity:</Typography>
                <Box className="counterContainer">
                    <Box className="quantity">
                        <Button className="btnsubtract" disabled={Count <= 1 || Stock <= 0} onClick={decrease}><RemoveOutlinedIcon/></Button>
                        <span className="numberCont">{Count}</span>
                        <Button className="btnADD" disabled={Count >= Stock} onClick={increase}><AddOutlinedIcon/></Button>
                    </Box>
                    <Typography variant="subtitle2" color="initial" className='contAvailable'>{availableStock()}</Typography>
                </Box>
            </Box>
            <Box className="btnAddWishList">
                <Button className="btnAddToCart" onClick={() => onAdd(Count, Size)} disabled={Stock <= 0 || selected === ''}> ADD TO CART</Button>
                <IconButton
                    className='addToWishlist'
                    sx={{marginLeft: '15px',border: '1px solid #e0e0e0', width: '54px', height: '54px', display: 'grid', placeContent: 'center'}}
                    aria-label="toggle password visibility"
                    onClick={handleClickAddFavorite}
                    onMouseDown={handleMouseDownFavorite}
                    >
                    {favorite.show ? <FavoriteIcon sx={{color: 'red !important'}} /> : <FavoriteBorderIcon /> }
                </IconButton>
                {favorite.show && <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert autoHideDuration={2000} severity="success">
                        Item added to wish!
                    </Alert>
                </Snackbar>}
            </Box>
        </>
    )
}

