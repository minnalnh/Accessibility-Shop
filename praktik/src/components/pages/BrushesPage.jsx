import brushes from "../../json/brushes.json";
import Product from '../Product';
import ShoppingBag from "../ShoppingBag";
//import { addToCart } from '../ShoppingBag';

const BrushesPage = () => {
// addToCart={addToCart}
    return (
        <div>
            <a className="page-title">Brushes</a>
            <div className="brush-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <div className="flex-container">
                {
                    brushes.map(brush => (
                        <Product key={brush.id} {...brush} />
                    ))
                }
            </div>
        </div>
    );

}
export default BrushesPage;