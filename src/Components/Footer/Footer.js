import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="mt-5 footer ">

            <h3 className="text-center">Guiatar Center</h3>

            <footer class="footer-container">
                <div class="logo">


                </div>
                <div class="ratings d-flex justify-content-center">
                    <i class="fab fa-facebook fa-2x social"></i>
                    <i class="fab fa-instagram-square fa-2x social"></i>
                    <i class="fab fa-discord fa-2x social"></i>
                    <i class="fab fa-youtube fa-2x social"></i>



                </div>
                <p class="copyright text-center">Copyright &#169; 2022 All Rights Reserved</p>

                <p className="text-center">  Email: guitarcenter@gmail.com</p>
                <p className="text-center">Address: 66 Mohakhali ja,Dhaka </p>

            </footer>
        </div>
    );
};

export default Footer;