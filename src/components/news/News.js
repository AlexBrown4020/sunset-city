import './news.css';
import useFetch from '../../hooks/useFetch';

export const News = () => {
    const url = `https://sunset-city-api.herokuapp.com/news`;
    const { data } = useFetch(url);

    return (
        <div id='news-container'>
            <h4 id='news-title'>News</h4>
            <div id='content-container'>
                {
                    data.map((obj) => {
                        return <div className='news-content' key={obj.title}>
                                <p  className='news-content-title'>{obj.title}</p>
                                <p  className='news-content-p'>{obj.content}</p>
                                <p  className='news-content-date'>Posted: {obj.date}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
};

export default News;