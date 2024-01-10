import React from 'react';
import artSupplies from "../../../json/paint/oil-paint.json";
import Product from '../../Product';

const OilPaintPage = () => {
    return (
        <div className="oil-paint-page">
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <h2>Oil Paint</h2>
            <div className="flex-container">
            {artSupplies.map(artSupply => (
                        <Product key={artSupply.id} {...artSupply} />
                    ))
                }
            </div>
        </div>
    );

}
export default OilPaintPage;