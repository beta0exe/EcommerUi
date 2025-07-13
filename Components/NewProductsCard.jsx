import "../css/NewProductsCard.css"
import {Star} from "lucide-react"
function NewProductsCard({NewProduct}) {
    return (
        <div className="new-products-card">
            <div className="new-products-top">
            {/* i need image overlay with different color to change on there select*/}
                <div className="new-products-overlay">
                        <img  src={NewProduct.image} alt="new-products-image" className="overlay-image"/>
                </div>
            </div>
            <div className="new-products-card-bot">
                <div className="new-products-card-bot-title">
                    <p className="new-products-card-title">{NewProduct.title}</p>
                </div>
                <div className="new-products-card-bot-price">
                    <p className="new-products-card-price">${NewProduct.price}</p>
                    <p className="new-products-card-star"><Star size={20} color="#063a88" /> {NewProduct.score} </p>
                </div>
            </div>
        </div>
    )
}


export default NewProductsCard;