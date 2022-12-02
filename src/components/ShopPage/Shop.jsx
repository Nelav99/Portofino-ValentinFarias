import React from "react";
import SliderShop from "./SliderShop";
import Newsletter from "../HomePage/Newsletter";
import ServiceBanner from "../HomePage/ServiceBanner";
import SectionBlog from "../HomePage/SectionBlog";
import CarruselBlog from "../GeneralComponents/CarruselBlog";
import PrincipalTitle from "../HomePage/PrincipalTitle";
import ParallaxShop from "./ParallaxShop";
import CarruselProducts from "../GeneralComponents/CarruselProducts";
import SpecialProducts from "../GeneralComponents/SpecialProducts";

export default function Shop() {
    return (
        <>
            <SliderShop/>
            <PrincipalTitle />
            <CarruselProducts/>
            <ParallaxShop />
            <SpecialProducts />
            <ServiceBanner/>
            <SectionBlog />
            <CarruselBlog />
            <Newsletter/>
        </>
    )
}