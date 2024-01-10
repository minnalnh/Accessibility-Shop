import React from 'react';
import artSupplies from "../../../json/pencils/graphite-pencils.json";
import Product from '../../Product';

const GraphitePencilsPage = () => {
    return (
        <div className="graphite-pencils-page">
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <h2>Graphite Pencils</h2>
            <div className="flex-container">
                {artSupplies.map(artSupply => (
                        <Product key={artSupply.id} {...artSupply} />
                    ))
                }
            </div>
        </div>
    );

}
export default GraphitePencilsPage;