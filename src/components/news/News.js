import './news.css';

const mockData = [
    {title: 'Title 1', content: 'This is some random text content in place of the website owner making announcements and updates to potential clients and investors.', date: '17/02/2023'},
    {title: 'Title 2', content: 'This is some random text content in place of the website owner making announcements and updates to potential clients and investors.', date: '18/02/2023'},
    {title: 'Title 3', content: 'This is some random text content in place of the website owner making announcements and updates to potential clients and investors.', date: '19/02/2023'},
    {title: 'Title 4', content: 'This is some random text content in place of the website owner making announcements and updates to potential clients and investors.', date: '20/02/2023'},
    {title: 'Title 5', content: 'This is some random text content in place of the website owner making announcements and updates to potential clients and investors.', date: '21/02/2023'},
    {title: 'Title 6', content: 'This is some random text content in place of the website owner making announcements and updates to potential clients and investors.', date: '22/02/2023'}
]

export const News = () => {
    return (
        <div id='news-container'>
            <h4 id='news-title'>News</h4>
            <div id='content-container'>
                {
                    mockData.map((obj) => {
                        return <div className='news-content'>
                                <p className='news-content-title'>{obj.title}</p>
                                <p className='news-content-p'>{obj.content}</p>
                                <p className='news-content-date'>{obj.date}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
};

export default News;