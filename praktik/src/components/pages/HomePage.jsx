import React, { useRef } from "react";
import Header from "../Header";
import SlideShow from '../SlideShow';
import Settings from "../Settings";
import HomeCategories from '../HomeCategories';

const HomePage = ({ btnTextRef_3, btnTextRef_4 }) => {

    return (
        <div>
            <a className="page-title">HomePage</a>
            <SlideShow btnTextRef_3={btnTextRef_3} btnTextRef_4={btnTextRef_4} />
            <HomeCategories />
        </div>
    );

}

export default HomePage;