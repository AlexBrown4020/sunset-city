import React from 'react';
import './product-table.css';

export const ProductTable = () => {
    return (
        <div id='product-container'>
            <div id='product-table'>
                <h3 id='product-title'>Product List</h3>
                <div className='product'>
                    <p className='product-text name'>Tier 1</p>
                    <p className='product-text info'>Product description about what you get, the lowest tier investment</p>
                    <p className='product-text cost'>€5</p>
                </div>
                <div className='product'>
                    <p className='product-text name'>Tier 2</p>
                    <p className='product-text info'>Product description about what you get, the mid tier investment</p>
                    <p className='product-text cost'>€10</p>
                </div>
                <div className='product bottom'>
                    <p className='product-text name'>Tier 3</p>
                    <p className='product-text info'>Product description about what you get, the high tier investment</p>
                    <p className='product-text cost'>€20</p>
                </div>
            </div>
        </div>
    )
}

export default ProductTable;