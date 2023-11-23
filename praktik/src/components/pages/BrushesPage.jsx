import Product from '../Product';

const brushes = ["Fan Brush", "Round Paint Brush", "Angular Brush"];

let text = "";

for(let i = 0; i < brushes.length; i++) {
    text += brushes[i];
}

const BrushesPage = () => {
    return (
        <div>
            <h2>Brushes</h2>
            <img src="https://placehold.jp/150x150.png"></img>
            <img src="https://placehold.jp/150x150.png"></img>
            <div className="flex-container">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );

}

export default BrushesPage;