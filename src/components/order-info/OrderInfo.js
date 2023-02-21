import './order-info.css';

export const OrderInfo = () => {
    return (
        <div id='order-info-container'>
            <div className='flank-container left'>

            </div>
            <div className='central-order-info'>
                <div id='sub-container'>
                    <h3 id='order-info-title'>Order Info</h3>
                    <p id='order-instructions'>Here are a list of instructions on how to order the products</p>
                    <div id='order-paragraphs'>
                        <li className='order-step'>Here is instruction one, do this stuff.  Lorem ipsum blah blah blah blah blah blah blah blah blah</li>
                        <li className='order-step'>Here is a link to a payment page: <a href='fake'>fake path</a></li>
                        <li className='order-step'>Email to official vendor, and other vital information: fake@email.com</li>
                        <li className='order-step'>Other information that might be useful</li>
                    </div>
                </div>

            </div>
            <div className='flank-container right'>

            </div>

        </div>
    )
};

export default OrderInfo;