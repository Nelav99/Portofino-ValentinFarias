import { Box, Breadcrumbs, Container, Rating, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceBanner from "../HomePage/ServiceBanner";
import OtherProducts from "../GeneralComponents/OtherProducts";
import Newsletter from "../HomePage/Newsletter";
import CarruselProducts from "../GeneralComponents/CarruselProducts";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import ModalConfirm from "./ModalConfirm";
import { useCartContext } from '../../ContextContainer';

function handleClick(event) {
    event.preventDefault();
}

export default function ItemDetail(id) {
    const {addItemToCart} = useCartContext();
    const [openModal, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => {setOpen(false)};

    let detail = id;
    const starCount = (n) => {
        setStar(n);
    }

    const onAdd = (quantity, size) => {
        handleOpenModal();
        addItemToCart(detail, quantity, size);
    }

    const [star, setStar] = useState(0);

    useEffect(() => {
        starCount(5);
    }, [])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'})
    }, [detail])

    return (
        <Container className="containerDetailProduct">
            <Box className="presentation" role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" to="/">
                        HOME
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        to="/Category/Shop"
                    >
                        PRODUCT
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                    >
                        {id.category}
                    </Link>
                </Breadcrumbs>
            </Box>
            <Box className="productDetail">
                {!detail.id &&
                    <Box className="skeletonDetailProduct">
                        <Skeleton className="skeleton" variant="rectangular" />
                    </Box>
                }
                {detail.id &&
                <Box className="detailsContain">
                    <img className="imageProductDetail" src={detail.image} alt={detail.name} />
                    <Box className="textDetails">
                        <Typography className="nameDetailProduct" variant="h2" color="initial">{detail.name}</Typography>
                        <Box className="containerStars">
                            <Rating name="stars" value={star} readOnly />
                            <Typography className="comments" variant="caption" color="initial">(21 comments)</Typography>
                        </Box>
                        <Typography className="priceDetail" variant="h3" color="initial">${detail.price}</Typography>
                        {
                            openModal && <ModalConfirm open={openModal} handleClose={handleCloseModal} only={detail.only}/>
                        }
                        <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} porductId={detail.id}/>
                        <Box className="textProductDetails">
                            <Typography variant="h5" color="initial"> Product Details:</Typography>
                            <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus rerum nulla blanditiis tenetur voluptates, veniam ipsum quod dolorem distinctio esse, suscipit dolor expedita eius dolorum nemo perspiciatis vero! Officia.</Typography>
                        </Box>
                        <Typography variant="caption" color="initial" sx={{display: 'none'}}>{detail.only}</Typography>
                    </Box>
                </Box>}
            </Box>
            <Box className="containerOtherProducts">
                <OtherProducts only={detail.only}/>
            </Box>
            <ServiceBanner/>
            <Box className="containerMoreProducts">
                <Typography variant="h3" color="initial" className="titleOtherProducts titleMoreProducts">More Products:</Typography>
                <CarruselProducts only={detail.only}/>
            </Box>
            <Newsletter />
        </Container>
    )
}