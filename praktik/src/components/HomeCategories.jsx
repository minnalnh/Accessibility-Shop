
const HomeCategories = () => {
    return (
        <div>
            <h2>Popular Products:</h2>
            <hr />
            <div className="flex-container home-categories">
                <div className="item">
                    <h3 className="category-title">Brushes</h3>
                    <div className="category product-img-container">
                            <img src="json-images/round-brush-set-of-3.png" alt="Round Brush Set of 3" className="product-img home-img"></img>
                        <img src="json-images/bristle-fan-brush.png" alt="Bristle Fan Brush" className="product-img home-img"></img>
                    </div>
                </div>
                <div className="item">
                    <h3 className="category-title">Paint</h3>
                    <div className="category product-img-container">
                            <img src="json-images/cadmium-yellow.png" alt="Cadmium Yellow Paint" className="product-img home-img"></img>
                            <img src="json-images/cobalt-blue.png" alt="Cobalt Blue Paint" className="product-img home-img"></img>
                    </div>
                </div>
                <div className="item">
                    <h3 className="category-title">Paper</h3>
                    <div className="category product-img-container">
                            <img src="json-images/canvas-panel-set.png" alt="Canvas Panel Set Paper" className="product-img home-img"></img>
                            <img src="json-images/cold-pressed-watercolor-pad.png" alt="Cold-Pressed Watercolor Pad" className="product-img home-img"></img>
                    </div>
                </div>
                <div className="item">
                    <h3 className="category-title">Pencils</h3>
                    <div className="category product-img-container">
                            <img src="json-images/premium-graphite-pencil-set.png" alt="Premium Graphite Pencil Set" className="product-img home-img"></img>
                            <img src="json-images/watercolor-pencil-set.png" alt="Watercolor Pencil Set" className="product-img home-img"></img>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default HomeCategories;