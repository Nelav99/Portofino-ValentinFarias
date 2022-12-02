import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ContextGlobal } from '../../ContextContainer';
import { useEffect } from 'react';

export default function Counter({id, newQuantity}) {
    const { Cart } = useContext(ContextGlobal);
    const product = Cart.find(item => item.id === id);
    const [count, setCount] = useState(product.quantity);

    function add(){
        if(count < product.stock) {
            setCount(count + 1);
        }
    }

    function substract() {
        if(count >= 2) {
            setCount(count - 1);
        }
    }

    function onlyLeft() {
        if(product.stock - count === 0) {
            return '¡No more Stock Availabel!';
        } else if(product.stock - count <= 5) {
            return `Only ${product.stock - count} left`;
        }
    }

    useEffect(() => {
        newQuantity(product, count, product.size);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    return (
        <>
            <Box sx={{display: 'flex', flexWrap: 'wrap', flex: '0 0 auto', maxWidth: '100%'}}>
                <Button className="btnSubtractQuantity" onClick={substract} sx={{height: '23px', width: '23px', borderRadius: '10px', lineHeight: '20px', textAlign: 'center', cursor: 'pointer', minWidth: 'auto', padding: 0}}><RemoveOutlinedIcon style={{fontSize: '16px', verticalAlign: 'middle', lineHeight: '20px', textAlign: 'center', cursor: 'pointer'}}/></Button>
                <span style={{fontSize: '16px', textAlign: 'center', margin: '0 4px', border: 0, width: '46px', height: '21px', lineHeight: '21px'}}>{count}</span>
                <Button className="btnAddQuantity" onClick={add} sx={{height: '23px', width: '23px', borderRadius: '10px', lineHeight: '20px', textAlign: 'center', cursor: 'pointer', minWidth: 'auto', padding: 0}}><AddOutlinedIcon style={{fontSize: '16px', verticalAlign: 'middle', lineHeight: '20px', textAlign: 'center', cursor: 'pointer'}}/></Button>
            </Box>
            <Typography variant="body2" color="#e30044" sx={{width: '100%', marginTop: '8px', textAlign: 'center', fontSize: '14px', lineHeight: '1.5'}}>{onlyLeft()}</Typography>
        </>
    )
}
