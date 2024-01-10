import React from 'react';
import brushes from "../../../json/paper/watercolor-paper.json";
import Product from '../../Product';

const BrushesPage = () => {
    return (
        <div className="watercolor-paper-page">
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <h2>Watercolor Paper</h2>
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