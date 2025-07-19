import "../css/Footer.css"
import {User} from "lucide-react"
import { ChevronDown } from 'lucide-react';

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-top">
                <div className="footer-top-container">
                    <div className="footer-first-row">
                        <div className="footer-first-row-t">
                            <h4 className="footer-title">Company</h4>
                        </div>
                        <div className="footer-first-row-gap">
                            <ul>
                                <li className="footer-row-item"><a href="#">about us</a></li>
                                <li className="footer-row-item"><a href="#">blog</a></li>
                                <li className="footer-row-item"><a href="#">returns</a></li>
                                <li className="footer-row-item"><a href="#">order status </a></li>
                            </ul>
                            <div className="footer-first-row-item">
                                <img src="../public/paypal.png" alt="paypal" />
                                <img src="../public/american%20express.png" alt="american express" />
                                <img src="../public/visa.png" alt="visa" />
                                <img src="../public/master%20card.png" alt="master card" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-second-row">
                        <h4 className="footer-title">Info</h4>
                        <ul>
                            <li className="footer-row-item"><a href="#">How it works?</a></li>
                            <li className="footer-row-item"><a href="#">our promises</a></li>
                            <li className="footer-row-item"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-third-row">
                        <h4 className="footer-title">Contact us</h4>
                        <ul>
                            <li className="footer-row-item"><p>123 Main Street, Anytown,USA</p></li>
                            <li className="footer-row-item"><p>+1 (555) 123-4567</p></li>
                            <li className="footer-row-item"><p>TechHeimSupport@gmail.com</p></li>
                        </ul>
                    </div>
                    <div className="footer-title movetoleft1">
                        <h4 className="footer-fourth-row-title">Sign up for News and updates</h4>
                        <div className="footer-fourth-row-input">
                            <input type="text" className="footer-email-input" placeholder="  E-mail Address" />
                        </div>
                        <div className="footer-fourth-row-social-media">
                            {/*social media emojis*/}
                            <img  className="social-icon" src="../public/Facebook.png" alt="Facebook" />
                            <img  className="social-icon" src="../public/twitter.png" alt="Twitter" />
                            <img  className="social-icon" src="../public/Instagram.png" alt="Instagram" />
                            <img  className="social-icon"  src="../public/Youtube.png" alt="Youtube" />
                        </div>
                    </div>
                    <div className="footer-Sixth-row">
                        <button className="footer-Sixth-row-btn">
                            <img src="../public/message-question.png" alt="message-question" />
                        </button>
                        <button className="footer-Sixth-row-btn">
                            <img src="../public/arrow-circle-up.png" alt="arrow-circle-down" />
                        </button>
                    </div>

                </div>
            </div>
            <div className="footer-bot">
                <div className="footer-bot-left">
                    <p className="footer-bot-left">2023 Tech Heim.</p>
                </div>
                <div className="footer-bot-right">
                    <ul className="footer-bot-right-ui">
                        <li className="footer-bot-left"><a href="#">cookie settings</a></li>
                        <li className="footer-bot-left"><a href="#">Privacy Policy</a></li>
                        <li className="footer-bot-left"><a href="#">Terms and Conditions </a></li>
                        <li className="footer-bot-left"><a href="#">Imprint</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-phone">
                <div className="footer-btn">
                    <button className="footer-phone-button"><img src="../public/message-question.png" alt="message-question" /></button>
                    <button className="footer-phone-button"><img src="../public/arrow-circle-up.png" alt="arrow-circle-down"  /></button>
                </div>
                <div className="footer-line-2">
                    <h3 className="footer-line-2-title">Sign up for News and updates</h3>
                    <input type="text" className="footer-phone-input" placeholder="E-mail Address"/>
                </div>
                <div className="footer-line-3">
                   <div className="footer-line-3-first-row">
                       <p className="footer-line-3-first-row">Company</p>


                       <p className="footer-line-3-sec-row">Info</p>
                       <p className="footer-line-3-third-row">Contact us</p>
                   </div>
                    <div className="footer-line-3-sec-row">
                        <p className="footer-line-3-first-row"><ChevronDown color="white" size={24} /></p>
                        <p className="footer-line-3-sec-row"><ChevronDown color="white" size={24} /></p>
                        <p className="footer-line-3-third-row"><ChevronDown color="white" size={24} /></p>
                    </div>
                </div>
                <div className="footer-sec-section">
                    <div className="footer-sec-section-left">
                        <img src="../public/paypal.png" alt="sec-section" />
                        <img src="../public/american%20express.png" alt="sec-section" />
                        <img src="../public/visa.png" alt="sec-section" />
                        <img src="../public/master%20card.png" alt="sec-section" />
                    </div>
                    <div className="footer-sec-section-right">
                        <img src="../public/icon(1).png" alt="sec-section" />
                        <img src="../public/Icon.png" alt="sec-section" />
                        <img src="../public/Icon(2).png" alt="sec-section" />
                        <img src="../public/Icon(3).png" alt="sec-section" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer