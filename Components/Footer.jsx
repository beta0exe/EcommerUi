import "../css/Footer.css"

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
        </div>
    )

}

export default Footer