import "../css/ProductCard.css"
function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-card-top">
                <img src={product.discount} alt="discount" className="discount"/>
                <img  className="product-card-image" src={product.image}/>
                {/*fix the discount i dont know if its image yet*/}
            </div>
            <div className="product-informations">
                <div className="product-card-bot-card-bot-title">
                    <p className="product-card-title">{product.title}</p>
                </div>
                <div className="product-card-bot-price">
                    <p className="product-card-bot-price-text-discount"><span className="discount-price-text">{product.oldPrice}</span></p>
                    <p className="product-card-bot-price-text">{product.price}</p>
                </div>
            </div>
        </div>
    )
}


export default ProductCard;