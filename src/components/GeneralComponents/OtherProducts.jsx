import { Typography } from "@mui/material";
import React from "react";
import Service from "../Service/Service";

export default function OtherProducts(only) {
    const generate = only.only;
    return (
        <>
            <Typography className="titleOtherProducts" variant="h3" color="initial">RELATED PRODUCTS:</Typography>
            <Service only={generate} start={0} end={4}/>
        </>
    )
}