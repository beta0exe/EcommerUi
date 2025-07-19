import "../css/ProductPrice.css"
function ProductPrice() {
    return (
        <div className="ProductPrice">
            <div className="ProductPrice_first-part">
                <div className="ProductPrice-price-after-discount">
                    <p className="ProductPrice-first-part-price">$ 1299.00</p>
                    <img src="../public/ProductDetailsPublic/discount.png"  alt="discount" className="ProductPrice-first-part-price-discount" />
                </div>
                <div className="ProductPrice-first-part-before">
                    <p className="ProductPrice-first-part-price-before-discount">last price $ 1410,87</p>
                </div>
            </div>
            <div className="ProductPrice-sec-part">
                <div className="ProductPrice-sec-part-1">
                    <input type="radio" className="ProductPrice-sec-part-radio" />
                    <label className="ProductPrice-sec-part-label">Pay Now</label>
                </div>
                <div className="ProductPrice-sec-part-2">
                    <input type="radio" className="ProductPrice-sec-part-radio" />
                    <label className="ProductPrice-sec-part-label">Buy in installments</label>
                    <p className="ProductPrice-sec-part-text">choose your installments period</p>
                </div>
                <div className="ProductPrice-sec-part-3">
                    <button className="ProductPrice-sec-part-button">3<br/>Months</button>
                    <button className="ProductPrice-sec-part-button">6<br/>Months</button>
                    <button className="ProductPrice-sec-part-button">9<br/>Months</button>
                    <button className="ProductPrice-sec-part-button">12<br/>Months</button>
                </div>
                <div className="ProductPrice-sec-part-4">
                    <p className="ProductPrice-sec-part-price">$433.00 /Month</p>
                </div>
            </div>
            <div className="ProductPrice-third-part">
                <button className="ProductPrice-third-part-button">Buy Now</button>
                <button className="ProductPrice-third-part-button-2">Add to cart</button>

            </div>
        </div>
    )
}



export default ProductPrice;