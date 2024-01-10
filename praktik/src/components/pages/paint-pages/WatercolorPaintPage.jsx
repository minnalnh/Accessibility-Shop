import React from 'react';
import artSupplies from "../../../json/paint/watercolor-paint.json";
import Product from '../../Product';

const WatercolorPaintPage = () => {
    return (
        <div className="watercolor-paint-page">
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <h2>Watercolor Paint</h2>
            <div className="flex-container">
            {artSupplies.map(artSupply => (
                        <Product key={artSupply.id} {...artSupply} />
                    ))
                }
            </div>
        </div>
    );

}
export default WatercolorPaintPage;