import brushes from "../../json/brushes.json";
import Product from '../Product';

const BrushesPage = () => {
    return (
        <div>
            <a className="page-title">Brushes</a>
            <img src="https://placehold.jp/150x150.png"></img>
            <img src="https://placehold.jp/150x150.png"></img>
            <div className="flex-container">
                {
                    brushes.forEach(brush => <Product {...{brush }} />)
                }
            </div>
        </div>
    );

}
export default BrushesPage;