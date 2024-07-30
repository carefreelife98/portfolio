import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Make By CarefreeLife98")}</p>
                    <p style={{marginTop: "15px", fontSize: "10px"}}>Theme By <a href="https://github.com/Ikalli/ReactFolio" style={{fontSize: "10px"}}>ReactFolio</a></p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;