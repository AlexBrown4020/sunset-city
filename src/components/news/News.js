import { useEffect, useState } from 'react';

import './news.css';
import axios from 'axios';

export const News = () => {
    const url = `https://sunset-city-api.herokuapp.com/news`;
    const [data, setData] = useState([]);
    const [auth, setAuth] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchNews() {
            const request = await axios.get(url);
            setData(request.data);
        }
        fetchNews();

        setAuth(localStorage.getItem('user'));
        if (auth) {
            setAuth(auth);
        }
    }, [auth, url]);

    const submitData = async () => {
        let result = await fetch('https://sunset-city-api.herokuapp.com/news', {
            method: 'post',
            body: JSON.stringify({
                title, message
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result.title) {
            console.log("Submitted");
        } else {
            console.log("Failed");
        }
    };

    const deleteData = async (id) => {
        let news = await fetch(`https://sunset-city-api.herokuapp.com/news/${id}`, {
          method: 'delete'
        });
        news = await news.json();
        if (news) {
          alert('News deleted');
        }
      };

    return (
        <div id='news-container'>
            <h4 id='news-title'>News</h4>
                {
                auth ? 
                <div id='create-container'>
                    <h3 id='create-news'>Create news...</h3>
                    <input className='create-input' type='text' placeholder='News Title' onChange={(e) => {
                            setTitle(e.target.value)}} value={title}></input>
                    <textarea className='create-input large-input' type='textarea' placeholder='News Content' onChange={(e) => {
                            setMessage(e.target.value)}} value={message}></textarea>
                    <button onClick={submitData}>Submit</button>
                </div>
                : <></>
            }
            <div id='content-container'>
                {
                    data.map((obj) => {
                        return <div className='news-content' key={obj.title}>
                                <div id='news-banner'>
                                    <p  className='news-content-title'>{obj.title}</p>
                                    {
                                        auth ? 
                                        <button onClick={() => deleteData(obj._id)}>Delete</button>
                                        : <></>
                                    }
                                </div>
                                <p  className='news-content-p'>{obj.message}</p>
                                <p  className='news-content-date'>Posted: {obj.created_date.slice(0,10)}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
};

export default News;