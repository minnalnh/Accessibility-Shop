import React from 'react';
import brushes from "../../../json/paint/acrylic-paint.json";
import Product from '../../Product';

const BrushesPage = () => {
    return (
        <div>
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <div className="flex-container">
                {brushes.map(brush => (
                        <Product key={brush.id} {...brush} />
                    ))
                }
            </div>
        </div>
    );

}
export default BrushesPage;