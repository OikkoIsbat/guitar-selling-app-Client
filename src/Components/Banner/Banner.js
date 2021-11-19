import React from 'react';
import bannerImg from '../../images/guitarBanner.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner d-flex justify-content-center">
            <img src={bannerImg} className="w-50" alt="" srcset="" />

            <h5 className="text-white mt-5">Get 15% OFF on buying more than 1000 tk.
                <br />
                <br />
                Offer Ends on 1st December.
            </h5>


        </div>
    );
};

export default Banner;