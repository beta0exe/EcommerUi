import ProductPrice from "../Components/ProductPrice.jsx";
import SimilarProducts from "../Components/SimilerProducts.jsx";
import CommentBox from "../Components/CommentBox.jsx";
import "../css/ProductDetails.css"

function ProductDetails() {
    return (
        <div className="productDetails">
            <div className="productDetails-first-part">
                <div className="productDetails-first-part-links">
                    <a href="#">Home</a> &gt;
                    <a href="#">Products</a> &gt;
                    <a href="#">Laptops</a>
                </div>
                <div className="productDetails-first-part-image-info">
                    <div className="productDetails-first-part-image">
                        <img src="../public/ProductDetailsPublic/image.png" alt="prodcut" />
                        <div className="productDetails-first-part-otherimages">
                            <img src="../public/ProductDetailsPublic/Frame%2026086019.png" alt="prodcut" />
                            <img src="../public/ProductDetailsPublic/Frame%2026086048.png" alt="prodcut" />
                            <img src="../public/ProductDetailsPublic/Frame%2026086020.png" alt="prodcut" />
                            <img src="../public/ProductDetailsPublic/Frame%2026086021.png" alt="prodcut" />
                            <img src="../public/ProductDetailsPublic/Frame%2026086022.png" alt="prodcut" />
                        </div>
                    </div>
                    <div className="productDetails-first-part-informations">
                        <div className="productDetails-first-part-infomations-title">
                            <h2 className="productDetails-first-part-infomations-title-1">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h2>
                        </div>
                        <div className="productDetails-first-part-infomations-infomations-content">
                            <img src="../public/ProductDetailsPublic/rate%20star.png" alt="score" className="score-image" />
                            |
                            <p className="productDetails-first-part-infomations-infomations-sold">sold 125</p>
                        </div>
                        <div className="productDetails-first-part-infomations-infomations-tags">
                            <p className="productDetails-first-part-infomations-infomations-tags-1">In Stock</p>
                            <p className="productDetails-first-part-infomations-infomations-tags-2">Guaranteed</p>
                            <p className="productDetails-first-part-infomations-infomations-tags-3">Free Delivery</p>
                        </div>
                        <div className="productDetails-first-part-infomations-color">
                            <div className="productDetails-first-part-infomations-color-select">
                                <p className="productDetails-first-part-infomations-color-text">Select color</p>
                                <label className="color-wrapper">
                                    <input type="checkbox" className="color" name="color" />
                                    <span className="circle gray"></span>
                                </label>

                                <label className="color-wrapper">
                                    <input type="checkbox" className="color" name="color" />
                                    <span className="circle black"></span>
                                </label>
                            </div>
                            <div className="productDetails-first-part-infomations-product">
                                <div className="productDetails-first-part-infomations-product-div">
                                    <ul className="productDetails-first-part-infomations-product-ul">
                                        <li className="productDetails-first-part-infomations-product-li">brand</li>
                                        <li className="productDetails-first-part-infomations-product-li">Model Name </li>
                                        <li className="productDetails-first-part-infomations-product-li">Screen Size</li>
                                        <li className="productDetails-first-part-infomations-product-li">Hard Disk Size</li>
                                        <li className="productDetails-first-part-infomations-product-li">CPU Model</li>
                                    </ul>
                                </div>
                                <div className="productDetails-first-part-infomations-product-div">
                                    <ul className="productDetails-first-part-infomations-product-ul-2">
                                        <li className="productDetails-first-part-infomations-product-li-2">Apple</li>
                                        <li className="productDetails-first-part-infomations-product-li-2">Macbook Pro</li>
                                        <li className="productDetails-first-part-infomations-product-li-2">13.3 Inches</li>
                                        <li className="productDetails-first-part-infomations-product-li-2">256 GB</li>
                                        <li className="productDetails-first-part-infomations-product-li-2">core i5</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="productDetails-first-part-infomations-product-showmore">
                                <a href="#">ShowMore &gt;</a>
                            </div>
                        </div>
                    </div>
                            <div className="productDetails-first-part-price">
                                <ProductPrice />
                            </div>
                </div>
            </div>
            <div className="productDetails-sec-part">
                <div className="productDetails-sec-part-first-part">
                    <p className="productDetails-sec-part-first-part-links">Technical Details</p>
                    <p className="productDetails-sec-part-first-part-links">Similar Products</p>
                    <p className="productDetails-sec-part-first-part-links">Comments</p>
                </div>
                <div className="productDetails-sec-part-infomations ">
                    <h4 className="productDetails-sec-part-infomations-title">Technical Details</h4>
                    <div className="productDetails-sec-part-infomations-infomations-content">
                        <div className="productDetails-sec-part-infomations-infomations-1">
                            <div className="productDetails-sec-part-infomations-details grp1">
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">Display</p>
                                <p className="productDetails-sec-part-infomations-infomations-s-1 " >13.3-inch (diagonal) LED-backlit display with IPS technology</p>
                            </div>
                            <div className="productDetails-sec-part-infomations-details-grey grp2">
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">Graphics</p>
                                <p className="productDetails-sec-part-infomations-infomations-s-1 " id="move-a">Apple 10-core GPU</p>
                            </div>
                            <div className="productDetails-sec-part-infomations-details grp3">
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">Processor</p>
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">Apple M2 chip</p>
                            </div>
                            <div className="productDetails-sec-part-infomations-details-grey grp4">
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">In the box</p>
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">67W USB-C Power Adapter, USB-C Charge Cable (2 m)</p>
                            </div>
                            <div className="productDetails-sec-part-infomations-details grp5">
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">Height</p>
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">0.61 inch (1.56 cm)</p>
                            </div>
                            <div className="productDetails-sec-part-infomations-details-grey grp6">
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">Width</p>
                                <p className="productDetails-sec-part-infomations-infomations-s-1 ">11.97 inches (30.41 cm)</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="productDetails-sec-part-infomations-link">Show More <img src="../public/ProductDetailsPublic/arrow-down.png"/></a>
                </div>
            </div>
            <div className="productDetails-third-part">
                <div className="productDetails-third-part-title">
                    <h3 className="productDetails-third-part-title">Similar Products</h3>
                </div>
                <div className="productDetails-third-part-cards-similer1">
                    <SimilarProducts Similar={{image:"../public/SimilerProducts/1 (3).png",title:"Apple 2022 MacBook Pro Laptop with M2 chip 14-inch"}}/>
                    <SimilarProducts Similar={{image:"../public/SimilerProducts/1 (2).png",title:"Apple 2022 MacBook Air Laptop with M2 chip"}}/>
                    <SimilarProducts Similar={{image:"../public/SimilerProducts/1 (1).png",title:"Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch"}}/>
                    <SimilarProducts Similar={{image:"../public/SimilerProducts/1 (4).png",title:"Apple 2022 MacBook Air Laptop with M2 chip"}}/>
                </div>
            </div>
            <div className="productDetails-forth-part">
                <div className="productDetails-forth-part-left">
                    <div className="productDetails-forth-part-box">
                        <h3 className="productDetails-forth-part-title">Comments</h3>
                        <p className="productDetails-forth-part-description">leave your comments here for other customers</p>
                        <input type="text" className="productDetails-forth-part-description-input" placeholder="Share your thoughts about this product here"/>
                        <button className="productDetails-forth-part-button">Comment</button>
                        <div className="productDetails-forth-part-feature">
                            <h3 className="productDetails-forth-part-feature">By feature</h3>
                            <div className="productDetails-forth-part-feature-box grp-a1">
                                <p className="productDetails-forth-part-feature-description">Battery charge</p>
                                {/*<img src="../public/ProductDetailsPublic/Line%2024.png" className="productDetails-forth-part-feature-description-link"></img>*/}
                                <p className="productDetails-forth-part-feature-description-rate1">4.8</p>
                            </div>
                            <div className="productDetails-forth-part-feature-box grp-a2">
                                <p className="productDetails-forth-part-feature-description">Monitor</p>
                                {/*<img src="../public/ProductDetailsPublic/Line%2024.png" className="productDetails-forth-part-feature-description-link"></img>*/}
                                <p className="productDetails-forth-part-feature-description-rate2">4.9</p>
                            </div>
                            <div className="productDetails-forth-part-feature-box grp-a3">
                                <p className="productDetails-forth-part-feature-description">Lightness</p>
                                {/*<img src="../public/ProductDetailsPublic/Line%2023.png" className="productDetails-forth-part-feature-description-link"></img>*/}
                                <p className="productDetails-forth-part-feature-description-rate3">4.3</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productDetails-forth-part-right">
                    <div className="title-comments">
                        <h3 className="title-comments-1">Comments</h3>
                        <a href="#" className="title-comments-2">View all</a>
                    </div >
                    <div className="title-comments-2">
                    <CommentBox info={{picture:"../public/ProductDetailsPublic/3 (2).png",name:"Gabriel",joined:"July 28, 2023",rate:"../public/ProductDetailsPublic/3 (5).png",comment:"I needed a fast, efficient laptop for on the go use. Battery life is amazing. Build quality is fantastic. Perfect fit for my needs."}}/>
                    <CommentBox info={{picture:"../public/ProductDetailsPublic/3 (1).png",name:"Jimmy Smith",joined:"May 28, 2023",rate:"../public/ProductDetailsPublic/3 (4).png",comment:"This macbook air at first feels just so big to me using it for school, and after a while, it felt as a perfect size. I look at it sometimes and realize how portable and small it is, but IT FEELS AS BIG AS LIKE A TV SCREEN. It's not a huge computer, but when your doing work and typing or whatever watching youtube it feels like a movie screen, beautiful. I never had such a good computer that just feels like a breath of fresh air. If you are contemplating on buying one, I would get 512 GB of storage and 16 ram. You will not be disappointed if you buy this no matter what, I strongly recommend it."}}/>
                    <CommentBox info={{picture:"../public/ProductDetailsPublic/3 (6).png",name:"sarah Anderson",joined:"April 20, 2023",rate:"../public/ProductDetailsPublic/3 (3).png",comment:"This was my first personal Mac purchase. We are using a combination of Mac & PC at work and while my PC skills are good the Mac side needs work.\n" +
                            "So far I like the experience, although not all my apps will run on the Mac, I am finding workarounds.\n" +
                            "One person found this helpful"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
