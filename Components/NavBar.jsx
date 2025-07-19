import "../css/Navbar.css"
import { ShoppingBasket, Search, User ,CircleUser,Heart ,CirclePoundSterling,LogOut} from 'lucide-react';
import CategoryCards from "./CategoryCards.jsx";
import {useState} from "react";
import Hamburger from "./Hamburger.jsx";


function NavBar() {
    const [authorized, setAuthorized] = useState(false);
    function handleAuthorized() {
        setAuthorized(true);
    }
    function handleAuthorizedToFalse() {
        setAuthorized(false);
    }
   return (
       <div className='navbar'>
           <div className="nav-first-part ">
               <div className="hambergur-bar ">
                   <Hamburger/>
               </div>
               <div className="nav-first-part-title-mobile "><h2 className="title-mobile">Tech Heim</h2></div>
               <div className='navbar-brand-logo'>
                   <img src="../public/logo.png" alt='logo'/>
               </div>
               <div className='navbar-menu'>
                   <ul className='navbar-nav'>
                       <li className='nav-li'>Home</li>
                       <li className='product-nav'>
                           <input type="checkbox" id="product-checkbox" />
                           <label htmlFor="product-checkbox">Products</label>
                           <div className="product-dropdown">
                           <div className="product-leftside">
                               <div className="product-leftside-pics">
                                   <img src="../public/Navbar/mobile.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/monitor.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/mobile.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/watch.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/headphone.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/camera.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/game.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/data.png" className="product-leftside-pic" />
                                   <img src="../public/Navbar/devices.png" className="product-leftside-pic" />
                               </div>
                               <ul className="product-leftside-list">
                                   <li className='product-li'> Mobile Phones</li>
                                   <li className='product-li'> Laptops & Computers </li>
                                   <li className='product-li'> Tablets & E-reader</li>
                                   <li className='product-li'> Wearables</li>
                                   <li className='product-li'> Audio</li>
                                   <li className='product-li'> Cameras</li>
                                   <li className='product-li'> Gaming</li>
                                   <li className='product-li'> Networking</li>
                                   <li className='product-li'> Accessories</li>

                               </ul>
                           </div>
                           <div className='product-rightside'>
                               <div className="product-rightside-left">
                                   <div className="product-rightside-pics">
                                       <img src="../public/Navbar/mobile.png" className="product-rightside-pics" />
                                       <img src="../public/Navbar/monitor.png" className="product-rightside-pics" />
                                   </div>
                                   <ul className='product-li-nav'>
                                       <li className='product-li'>Smart Phones</li>
                                       <li className='product-li'>Accessories</li>
                                       <li className='product-li-link'><a href="#" className='nav-li-link' >View all</a></li>
                                   </ul>
                               </div>
                               <div className="product-rightside-right">
                                   <CategoryCards Category={{image:"../public/Navbar/frame image(2).png",title:"Gaming"}}/>
                                   <CategoryCards Category={{image:"../public/Navbar/frame image(1).png",title:"Gaming"}}/>
                                   <CategoryCards Category={{image:"../public/Navbar/frame image.png",title:"Gaming"}}/>
                                   <CategoryCards Category={{image:"../public/Navbar/image 155.png",title:"Gaming"}}/>
                               </div>
                           </div>
                           </div>
                       </li>
                       <li className='nav-li'>Blog</li>
                       <li className='nav-li'>FAQ</li>
                       <li className='nav-li'>Contact Us</li>
                   </ul>
               </div>

               {authorized ? (
                       <div className='navbar-icons'>
                           <div className='navbar-icons-search'><Search size={24} /></div>
                           <div className='navbar-icons-buy'><ShoppingBasket size={24} /></div>
                           <div className='navbar-icons-account'>
                               <input type="checkbox" id="user-checkbox"/>
                               <label htmlFor="user-checkbox" style={{ cursor: 'pointer' }}>
                                   <User size={24} />
                               </label>
                               <ul className='user-dropdown'>
                                   <li className='user-dropdown-item'>
                                       <div className="user-pic-info">
                                           <p className="user-info"><CircleUser style={{marginRight: '0.7rem'}}/> Jimmy Smith </p>
                                       </div>
                                       <div className="user-email">
                                           <p className="user-email">Jimmy.smith1996@gmail.com</p>
                                       </div>
                                   </li>
                                   <li className="user-dropdown-item">
                                       <p className="user-orders"> <ShoppingBasket  style={{marginRight: '0.5rem'}}/>  Orders</p>
                                   </li>
                                   <li className='user-dropdown-item'>
                                       <p className="user-wishlist"><Heart style={{marginRight: '0.5rem'}} /> Wishlist</p>
                                   </li>
                                   <li className='user-dropdown-item'>
                                       <p className="user-payments"> <CirclePoundSterling style={{marginRight: '0.5rem'}} /> Payments</p>
                                   </li>
                                   <li className='user-dropdown-item'>
                                       <p className="user-Logout"> <LogOut style={{marginRight: '0.5rem'}} onClick={handleAuthorizedToFalse}/> Logout</p>
                                   </li>
                               </ul>
                           </div>
                       </div>
               ) : (
                       <div className="login-btns">
                           <button className="login-btn" onClick={handleAuthorized} >Log in</button>
                           <button className="logout-btn"  >Register</button>
                       </div>
               )}
           </div>
           <div className="nav-sec-part">
                <input type="text" placeholder="What can we help you to find ?" className="search-bar"/>
           </div>
           <div className="navbar-overlay-black"></div>
       </div>
   )
}

export default NavBar;