
const HomeCategories = () => {
    return (
        <div>
            <h2>Popular Products:</h2>
            <hr />
            <div className="flex-container home-categories">
                <div>
                    <h3 className="category-title">Brushes</h3>
                    <div className="category">
                            <img src="images/mottler-brush.jpg" alt="Mottler Brush" className="product-img"></img>
                        <img src="images/goat-brush.jpg" alt="Goat Brush" className="product-img"></img>
                    </div>
                </div>
                <div>
                    <h3 className="category-title">Paint</h3>
                    <div className="category">
                            <img src="images/watercolor-paint.jpg" alt="Watercolor Paint" className="product-img"></img>
                            <img src="images/body-paint.jpg" alt="Body Paint" className="product-img"></img>
                    </div>
                </div>
                <div>
                    <h3 className="category-title">Paper</h3>
                    <div className="category">
                            <img src="images/sketch-paper.jpg" alt="Sketch Paper" className="product-img"></img>
                            <img src="images/watercolor-paper.jpg" alt="Watercolor Paper" className="product-img"></img>
                    </div>
                </div>
                <div>
                    <h3 className="category-title">Pencils</h3>
                    <div className="category">
                            <img src="images/colored-pencils.jpg" alt="Colored Pencils" className="product-img"></img>
                            <img src="images/graphite-pencils.jpg" alt="Graphite Pencils" className="product-img"></img>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default HomeCategories;