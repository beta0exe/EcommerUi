import { Sling } from 'hamburger-react'
import {useState} from "react";
import "../css/Hamburger.css"
import { ChevronUp } from 'lucide-react';


function Hamburger() {
    const [open, setOpen] = useState(false);
    return (
            <div className='navbar-hambergur'>
               <Sling
               size={33}
               toggled={open}
               toggle={setOpen}
               color={"black"}
               />
                {open && <div className="navbar-hambergur-bar">
                    <div className="navbar-hambergur-bar-first-row">
                        <div className="navbar-hambergur-bar-logo">
                            <img src="../public/logo.png" className="hamburger-icon" />
                        </div>
                        <div className="navbar-hambergur-bar-toggle">
                            <Sling
                                size={33}
                                toggled={open}
                                toggle={setOpen}
                                color={"black"}
                            />

                        </div>
                    </div>
                    <div className="navbar-hambergur-bar-second-row">
                        <ul className="navbar-hambergur-bar-ul">
                            <li className="navbar-hambergur-item1">
                                <input type="checkbox" className="toggle-subs"/>
                                <span className="product-span">Products</span>
                                <span className="product-span2"><ChevronUp/></span>
                                <ul className="product-subclass">
                                    <li className="hambergur-product-item">Mobile Phones</li>
                                    <li className="hambergur-product-item">Laptops & Computers </li>
                                    <li className="hambergur-product-item">Tablets & E-reader</li>
                                    <li className="hambergur-product-item">Wearables</li>
                                    <li className="hambergur-product-item">Audio</li>
                                    <li className="hambergur-product-item">Cameras</li>
                                    <li className="hambergur-product-item">Gaming</li>
                                    <li className="hambergur-product-item">Networking</li>
                                    <li className="hambergur-product-item">Accessories</li>
                                </ul>
                            </li>
                            <li className="navbar-hambergur-item">Blog</li>
                            <li className="navbar-hambergur-item">FAQ</li>
                            <li className="navbar-hambergur-item">Contact us</li>

                        </ul>
                    </div>
                </div>}
            </div>
    )

}

export default Hamburger;