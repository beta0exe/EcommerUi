import CategoryCards from "./CategoryCards.jsx"
import ProductCard from "./ProductCard.jsx"
import NewProductsCard from "./NewProductsCard.jsx"
import "../css/Home.css"
function Home() {
    return (
        <div className="Home">
            <div className="Home-container">
                {/*//first part here-part*/}
                <div className="Home_first-part">
                    <div className="Home_first-part-left">
                        <h1 className="Home_first-part-title">Tech Heim</h1>
                        <p className="Home_first-part-description">"Join the <span className="highlight-to-orange">digital revolution</span>"</p>
                        <button className="Home_first-part-button">Explore More</button>
                    </div>
                    <div className="Home_first-part-right">
                        <img className="Home_first-part-img" src="/public/Frame%2026086938.png" />
                    </div>
                </div>
                {/*// Sec part category-part*/}
                <div className="Home_second-part">
                    <CategoryCards Category={{image:"../public/image(3).png",title:"Accessories"}}/>
                    <CategoryCards Category={{image:"../public/image(2).png",title:"Camera"}}/>
                    <CategoryCards Category={{image:"../public/image(1).png",title:"Laptop"}}/>
                    <CategoryCards Category={{image:"../public/image.png",title:"Smart Phone"}}/>
                    <CategoryCards Category={{image:"../public/image(5).png",title:"Gaming"}}/>
                    <CategoryCards Category={{image:"../public/image(4).png",title:"Smart Watch"}}/>
                </div>
                {/*//third part - products*/}
                <div className="Home_third-part">
                    <div className="Home_third-part-left">
                        <div className="Home_third-part-left-top">
                            <h3 className="Home_third-part-title">Products On Sale</h3>
                            <p className="Home_third-part-description">Shop Now!</p>
                        </div>
                        <div className="Home_third-part-left-bot">
                            <a className="Home_third-part-button">View all &gt; </a>
                        </div>
                    </div>
                    <div className="Home_third-part-right">
                        <ProductCard product={{image:"../public/1 (1).png",title:"Logitech G502 Gaming Mouse Pro Edition",
                            oldPrice:"$38.00",price:"$19.99",discount:"discount(1).png"}}/>
                        <ProductCard product={{image:"../public/1 (5).png",title:"NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
                            ,oldPrice:"$49.00",price:"$34.30",discount:"discount.png"}}/>
                        <ProductCard product={{image:"../public/1 (3).png",title:"Apple Watch Series 7 (GPS, 41MM)"
                            ,oldPrice:"$289.00",price:"$231.20",discount:"discount(4).png"}}/>
                        <ProductCard product={{image:"../public/1 (4).png",title:"Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)"
                            ,oldPrice:"$950.22",price:"$712.99",discount:"discount(3).png"}}/>
                    </div>
                </div>
                {/*// forth part - new products*/}
                <div className="Home_fourth-part">
                    <div className="Home_fourth-part-title">
                        <h3 className="Home_fourth-part-title1">New Products</h3>
                        <a className="Home_fourth-part-button">View all &gt;</a>
                    </div>
                    <div className="Home_fourth-part-second-section">
                        <NewProductsCard NewProduct={{image:"../public/2 (1).png",title:"Iphone 14 promax 256 gig",price:"930.90",score:"4.5"}} />
                        <NewProductsCard NewProduct={{image:"../public/2 (4).png",title:"Blackmagic Design Pocket(Canon EF)",price:"2535.00",score:"4.8"}} />
                        <NewProductsCard NewProduct={{image:"../public/2 (3).png",title:"SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",price:"1018.00",score:"4.7"}} />
                        <NewProductsCard NewProduct={{image:"../public/2 (2).png",title:"VR VisionTech X1",price:"1,399.00",score:"3.9"}} />
                    </div>
                    <div className="Home_fourth-part-third-section">
                        {/*need a background here */}
                        <div className="Home_fourth-part-third-section-box-left">
                            <div className="Home_fourth-part-third-section-left">
                                <div className="Home_fourth-part-third-section-left-top">
                                    <h3 className="Home_fourth-part-title-one">Iphone <span className="highlighttowhite">15 Series</span></h3>
                                </div>
                                <div className="Home_fourth-part-third-section-left-bot">
                                    <img src="../public/image%20187.png" alt="iphone-image"/>
                                </div>
                            </div>
                            {/*fix here */}
                            <div className="Home_fourth-part-third-section-right">
                                <div className="Home_fourth-part-third-section-right-top">
                                    <h3 className="Home_fourth-third-section-right-top"><img src="../public/days.png" alt="days"/></h3>
                                    <h3 className="Home_fourth-third-section-right-top"><img src="../public/days.png" alt="days"/></h3>
                                    <h3 className="Home_fourth-third-section-right-top"><img src="../public/days.png" alt="days"/></h3>
                                    <h3 className="Home_fourth-third-section-right-top"><img src="../public/days.png" alt="days"/></h3>
                                </div>
                                <div className="Home_fourth-part-third-section-right-middle">
                                    <h3 className="Home_fourth-third-section-right-middle-title">It feels good to be the first</h3>
                                    <p className="Home_fourth-third-section-right-middle-text">
                                        Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.
                                    </p>
                                </div>
                                <div className="Home_fourth-part-third-section-right-bot">
                                    <button className="Home_fourth-third-section-right-bot-button">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Home_fourth-part-third-section-box-right">
                            <div className="Home_fourth-part-third-section-right-top1">
                                <h3 className="Home_fourth-third-section-right-top">Play Station 5</h3>
                            </div>
                            <div className="Home_fourth-part-third-section-right-bot1">
                                <p className="Home_fourth-third-section-right-top2">Digital Edition + 2TB</p>
                                <img src="../public/ps53.png" alt="ps4-image"/>
                            </div>
                            <div className="Home_fourth-part-third-section-right-middle">
                                <button className="Home_fourth-third-section-right-top3">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*fifth -part */}
                <div className="Home_fifth-part">
                    <div className="Home_fifth-part-top">
                        <div className="Home_fifth-part-top-title">
                            <h3 className="Home_fifth-part-title-one">Top Brands</h3>
                        </div>
                    </div>
                    <div className="Home_fifth-part-brand-logos">
                        <div className="Home_fifth-part-brand-apple"><img src="3 (2).png" alt="apple"/></div>
                        <div className="Home_fifth-part-brand-sony"><img src="3 (1).png" alt="sony"/></div>
                        <div className="Home_fifth-part-brand-samsung"><img src="3 (6).png" alt="samsung"/></div>
                        <div className="Home_fifth-part-brand-canon"><img src="3 (5).png" alt="canon"/></div>
                        <div className="Home_fifth-part-brand-huawei"><img src="3 (4).png" alt="huawei"/></div>
                        <div className="Home_fifth-part-brand-lenovo"><img src="3 (3).png" alt="lenovo"/></div>
                    </div>
                    {/*here */}
                    <div className="Home_fifth-part-banner">
                        <div className="Home_fifth-part-banner-left">
                            <h3 className="Home_fifth-part-title">SMART WATCH</h3>
                            <p className="Home_fifth-part-banner-left-text">Various designs and brands</p>
                            <a className="Home_fifth-part-banner-left-button">view</a>
                        </div>
                        <div className="Home_fifth-part-banner-right">
                            <img src="../public/Frame%2026086945.png" alt="watch-image"/>
                            <div className="road to orange"></div>
                        </div>
                    </div>
                    <div className="Home_fifth-part-bottom">
                        <div className="Home_fifth-part-bottom-feature">
                            <p className="Home_fifth-part-bottom-feature-text">Latest and Greatest Tech</p>
                        </div>

                        <div className="Home_fifth-part-bottom-feature">
                            <p className="Home_fifth-part-bottom-feature-text2">Guarantee</p>
                        </div>

                        <div className="Home_fifth-part-bottom-feature">
                            <p className="Home_fifth-part-bottom-feature-text3">Free Shipping over 1000$</p>
                        </div>

                        <div className="Home_fifth-part-bottom-feature">
                            <p className="Home_fifth-part-bottom-feature-text4">24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Home