import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BannerPri from "./HomePage/BannersPri";
import CarruselBlog from "./GeneralComponents/CarruselBlog";
import CarruselProducts from "./GeneralComponents/CarruselProducts";
import Error404 from "./GeneralComponents/Error404";
import Hero from "./HomePage/Hero";
import Newsletter from "./HomePage/Newsletter";
import ParallaxBanner from "./HomePage/ParallaxBanner";
import PrincipalTitle from "./HomePage/PrincipalTitle";
import SectionBlog from "./HomePage/SectionBlog";
import ServiceBanner from "./HomePage/ServiceBanner";
import Shop from "./ShopPage/Shop";
import SpecialProducts from "./GeneralComponents/SpecialProducts";
import ItemList from './Items/ItemList';

export default function ItemListContainer() {
    const {categoryid} = useParams();
    const [home, setHome] = useState("")

    useEffect( () => {
        const print = (value) => {
            if(value === 'Shop') {
                return <Shop/>
            } else if (value === 'Products' || categoryid === 'Features' || categoryid === 'Blog') {
                return <Error404 />
            } else {
                return (
                    <>
                        <Hero />
                        <BannerPri />
                        <PrincipalTitle />
                        <CarruselProducts/>
                        <ParallaxBanner />
                        <ItemList only={''} start={30} end={38}/>
                        <SpecialProducts />
                        <ServiceBanner />
                        <SectionBlog />
                        <CarruselBlog />
                        <Newsletter />
                    </>
                )
            }
        }
        setHome(print(categoryid))
    }, [categoryid])

    return (
        <div>{home}</div>
    );
}