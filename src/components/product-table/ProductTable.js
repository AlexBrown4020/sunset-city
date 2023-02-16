import './product-table.css';

export const ProductTable = () => {
    return (
        <div id='product-container'>
            <h3 id='product-title'>Product List</h3>
            <div id='product-table'>
                <div className='product'>
                    <p className='product-text name'>Product 1</p>
                    <p className='product-text info'>Product description about what you get, the lowest tier investment</p>
                    <p className='product-text-cost cost'>Cost $</p>
                </div>
                <div className='product'>
                    <p className='product-text name'>Product 2</p>
                    <p className='product-text info'>Product description about what you get, the lowest tier investment</p>
                    <p className='product-text-cost cost'>Cost $$</p>
                </div>
                <div className='product-bottom'>
                    <p className='product-text name'>Product 3</p>
                    <p className='product-text info'>Product description about what you get, the lowest tier investment</p>
                    <p className='product-text-cost cost'>Cost $$$</p>
                </div>
            </div>
        </div>
    )
}

export default ProductTable;