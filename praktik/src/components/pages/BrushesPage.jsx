import brushes from "../../json/brushes.json";
import Product from '../Product';

const BrushesPage = () => {
    return (
        <div>
            <a className="page-title">Brushes</a>
            <img src="images/main-2.jpg" alt="Painting brush getting dipped in paint" className="brushpage-img"></img>
            <div className="flex-container">
                {
                    brushes.map(brush => (
                        <Product key={brush} {...brush} />
                    ))
                }
            </div>
        </div>
    );

}
export default BrushesPage;