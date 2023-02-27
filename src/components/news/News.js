import { useEffect, useState } from 'react';

import './news.css';
import useFetch from '../../hooks/useFetch';

export const News = () => {
    const url = `https://sunset-city-api.herokuapp.com/news`;
    const { data } = useFetch(url);

    let [auth, setAuth] = useState('');

    useEffect(() => {
        setAuth(localStorage.getItem('user'));
        if (auth) {
            console.log("Admin found");
            setAuth(auth);
        } else {
            console.log('No admin found');
        }
    }, [auth])

    return (
        <div id='news-container'>
            {
                auth ? 
                <div>
                    <h5>Hi</h5>
                </div>
                : <></>
            }
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