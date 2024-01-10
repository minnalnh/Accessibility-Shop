import React from 'react';
import artSupplies from "../../../json/pencils/colored-pencils.json";
import Product from '../../Product';

const ColoredPencilsPage = () => {
    return (
        <div className="colored-pencils-page">
            <a className="page-title">Brushes</a>
            <div className="shopping-page-img">
                <p className="sr-only">Painting brush getting dipped in paint</p>
            </div>
            <h2>Colored Pencils</h2>
            <div className="flex-container">
            {artSupplies.map(artSupply => (
                        <Product key={artSupply.id} {...artSupply} />
                    ))
                }
            </div>
        </div>
    );

}
export default ColoredPencilsPage;