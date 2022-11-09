import React from "react";
import SliderShop from "./components/SliderShop";
import Newsletter from "./components/Newsletter";
import ServiceBanner from "./components/ServiceBanner";
import SectionBlog from "./components/SectionBlog";
import CarruselBlog from "./components/CarruselBlog";
import PrincipalTitle from "./components/PrincipalTitle";
import ParallaxShop from "./components/ParallaxShop";
import CarruselProducts from "./components/CarruselProducts";
import SpecialProducts from "./components/SpecialProducts";

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