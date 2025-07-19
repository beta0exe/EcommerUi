import {Heart,ShoppingCart} from "lucide-react"
import "../css/SimilerProducts.css"
function SimilarProducts({Similar}) {
    return (
        <div className="productDetails-third-part-cards-similer">
            <div className="productDetails-similer-product-image">
                <img src={Similar.image} alt="SimilarProductImage" />
            </div>
            <div className="productDetails-third-part-cards-similer-info">
                <div className="productDetails-third-part-cards-similer-info-title">
                    <p className="productDetails-third-part-cards-similer-info-title-1">{Similar.title}</p>
                </div>
                <div className="productDetails-third-part-cards-similer-info-btn">
                    <button className="productDetails-third-part-cards-similer-btn"><ShoppingCart /> Add to cart</button>
                    <button className="productDetails-third-part-cards-similer-btn-1"><Heart /></button>
                </div>
            </div>
        </div>
    )
}


export default SimilarProducts;