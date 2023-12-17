import brushes from "../../json/brushes.json";
import Product from '../Product';
import ShoppingBag from "../ShoppingBag";

const BrushesPage = () => {
    const addToCart = (product) => {
        console.log("Product added to cart: ", product);
    }
    return (
        <div>
            <a className="page-title">Brushes</a>
            <div className="brush-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <div className="flex-container">
                {
                    brushes.map(brush => (
                        <Product key={brushes} {...brush} addToCart={addToCart} />
                    ))
                }
            </div>
        </div>
    );

}
export default BrushesPage;