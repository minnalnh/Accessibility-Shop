import React from 'react';
import artSupplies from "../../../json/paper/canvas-paper.json";
import Product from '../../Product';

const BrushesPage = () => {
    return (
        <div className="canvas-paper-page">
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <h2>Canvas Paper</h2>
            <div className="flex-container">
            {artSupplies.map(artSupply => (
                        <Product key={artSupply.id} {...artSupply} />
                    ))
                }
            </div>
        </div>
    );

}
export default BrushesPage;