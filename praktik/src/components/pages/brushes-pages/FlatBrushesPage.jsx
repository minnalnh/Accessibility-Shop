import React from 'react';
import artSupplies from "../../../json/brushes/flat-brushes.json";
import Product from '../../Product';

const FlatBrushesPage = () => {
    return (
        <div>
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <div className="flex-container">
            {artSupplies.map(artSupply => (
                        <Product key={artSupply.id} {...artSupply} />
                    ))
                }
            </div>
        </div>
    );

}
export default FlatBrushesPage;