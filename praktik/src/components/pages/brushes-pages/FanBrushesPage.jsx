import React from 'react';
import artSupplies from "../../../json/brushes/fan-brushes.json";
import Product from '../../Product';

const FanBrushesPage = () => {
    return (
        <div className="fan-brushes-page">
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
        </div>
        <h2>Fan Brushes</h2>
            <div className="flex-container">
                {artSupplies.map(artSupply => (
                        <Product key={artSupply.id} {...artSupply} />
                    ))
                }
            </div>
        </div>
    );

}
export default FanBrushesPage;