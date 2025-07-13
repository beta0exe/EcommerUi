import "../css/Navbar.css"
import { ShoppingBasket, Search, User } from 'lucide-react';

function navBar() {
   return (
       <div className='navbar'>
           <div className='navbar-brand-logo'>
               <img src="../public/logo.png" alt='logo'/>
           </div>
           <div className='navbar-menu'>
               <ul className='navbar-nav'>
                   <li className='nav-li'>Home</li>
                   <li className='nav-li'>Products</li>
                   <li className='nav-li'>Blog</li>
                   <li className='nav-li'>FAQ</li>
                   <li className='nav-li'>Contact Us</li>
               </ul>
           </div>
           <div className='navbar-icons'>
              <div className='navbar-icons-search'><Search size={24} /></div>
               <div className='navbar-icons-buy'><ShoppingBasket size={24} /></div>
               <div className='navbar-icons-account'><User size={24} /></div>
           </div>
       </div>
   )
}

export default navBar;