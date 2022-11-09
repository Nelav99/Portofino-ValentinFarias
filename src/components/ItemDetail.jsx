import { Box, Breadcrumbs, Chip, Container, Link, Rating, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceBanner from "./ServiceBanner";
import OtherProducts from "./OtherProducts";
import Newsletter from "./Newsletter";
import CarruselProducts from "./CarruselProducts";
import ItemCount from "./ItemCount";

function handleClick(event) {
    event.preventDefault();
}

export default function ItemDetail(id) {
    const detail = id;
    const starCount = (n) => {
        setStar(n);
    }

    const handleClickSize = e => {
        // console.log(e);
    };

    function onAdd() {
        // console.log(Quantity of items: {cont})
    }

    const [star, setStar] = useState(0);

    useEffect(() => {
        starCount(5);
    }, [])

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
                    to="/Shop"
                    >
                    PRODUCT
                    </Link>
                    <Link underline="hover"
                    color="text.primary" >{id.category}</Link>
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
                        <Box className="selectSize">
                            <Typography variant="h6" color="initial"> Select Your Size:</Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label="XS" variant="outlined" onClick={handleClickSize} />
                                <Chip label="S" variant="outlined" onClick={handleClickSize} />
                                <Chip label="M" variant="outlined" onClick={handleClickSize} />
                                <Chip label="L" variant="outlined" onClick={handleClickSize} />
                                <Chip label="XL" variant="outlined" onClick={handleClickSize} />
                                <Chip label="XXL" variant="outlined" onClick={handleClickSize} />
                            </Stack>
                        </Box>
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        <Box className="textProductDetails">
                            <Typography variant="h5" color="initial"> Product Details:</Typography>
                            <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus rerum nulla blanditiis tenetur voluptates, veniam ipsum quod dolorem distinctio esse, suscipit dolor expedita eius dolorum nemo perspiciatis vero! Officia.</Typography>
                        </Box>
                    </Box>
                </Box>}
            </Box>
            <Box className="containerOtherProducts">
                <OtherProducts />
            </Box>
            <ServiceBanner/>
            <Container className="containerOtherProducts">
                <Typography variant="h3" color="initial" className="titleOtherProducts titleMoreProducts">More Products:</Typography>
            </Container>
            <CarruselProducts />
            <Newsletter />
        </Container>
    )
}