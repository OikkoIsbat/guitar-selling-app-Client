import React from 'react';
import gibson from '../../images/givson.jpg';
import signature from '../../images/sig.png';
import shur from '../../images/suhr.png';


const Partners = () => {
    return (
        <div>
            <div class="container my-5">
                <h1 class="text-center py-5">Partnership</h1>

                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 col-12 col-sm-12">
                        <div class=" border d-flex align-items-center rounded-3 w-100 d-flex justify-content-around">
                            <img src={gibson} alt="" width="100" height="150" srcset="" />
                            <h2 class="sponsor-color">Gibson</h2>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-6 col-12 col-sm-12">
                        <div
                            class=" border bg-light d-flex align-items-center rounded-3 w-100 d-flex justify-content-around">
                            <img src={signature} alt="" width="100" height="150" srcset="" />
                            <h2 class="sponsor-color">Signature</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12 col-sm-12">
                        <div
                            class="border bg-light d-flex align-items-center rounded-3 w-100 d-flex justify-content-around">
                            <img src={shur} alt="" width="100" height="150" srcset="" />
                            <h2 class="sponsor-color">Suhr</h2>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    );
};

export default Partners;