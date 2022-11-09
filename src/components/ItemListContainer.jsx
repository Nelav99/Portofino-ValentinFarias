import React from "react";
import BannerPri from "./BannersPri";
import Hero from "./Hero";
import PrincipalTitle from "./PrincipalTitle";
import ParallaxBanner from "./ParallaxBanner";
import SpecialProducts from "./SpecialProducts";
import ServiceBanner from "./ServiceBanner";
import SectionBlog from "./SectionBlog";
import CarruselProducts from "./CarruselProducts";
import CarruselBlog from "./CarruselBlog";
import Newsletter from "./Newsletter";

export default function ItemListContainer({greeting}) {
    return (
        <>
            <Hero />
            <BannerPri />
            <PrincipalTitle />
            <CarruselProducts/>
            <ParallaxBanner />
            <SpecialProducts />
            <ServiceBanner />
            <SectionBlog />
            <CarruselBlog />
            <Newsletter />
        </>
    );
}