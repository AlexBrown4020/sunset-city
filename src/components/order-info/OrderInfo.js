import './order-info.css';

export const OrderInfo = () => {
    return (
        <div id='order-info-container'>
            <div className='flank-container left'>
            </div>
            <div className='central-order-info'>
                <div id='sub-container'>
                    <h3 id='order-info-title'>Order Info</h3>
                    <p id='order-instructions'>To get your copy and more, follow these steps!</p>
                    <div id='order-paragraphs'>
                        <ol>
                            <li className='order-text'>Follow the link to our GoFundMe page</li>
                                <p className='order-subtext'>www.example.com</p>
                            <li className='order-text'>Apply for the subscription tier with your account</li>
                                <p className='order-subtext'>Receive email instructions about your tier</p>
                            <li className='order-text'>Get access to your content</li>
                                <p className='order-subtext'>Downloadable content is immediately available</p>
                                <p className='order-subtext'>Physical products ship to Europe and America within 1-3 weeks</p>
                            <li className='order-text'>Keep up to date with the news column</li>
                                <p className='order-subtext'>Find out about product updates and new releases!</p>
                        </ol>
                    </div>
                </div>

            </div>
            <div className='flank-container right'>
            </div>
        </div>
    )
};

export default OrderInfo;