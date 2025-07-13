import "../css/CategoryCards.css"

function CategoryCards({Category}) {
    return (
        <div className="card">
            <div className="card-image">
                <div className="card-img-top">
                    <img src={Category.image} className="card-image" />
                </div>
                <div className="card-body">
                    <p className="card-title">{Category.title}</p>
                </div>
            </div>
        </div>
    )
}


export default CategoryCards;