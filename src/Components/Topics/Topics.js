import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';
import Topic from '../Topic/Topic';

const Home = () => {
    const topicsObj = useLoaderData()
    const topics = topicsObj.data
    // console.log(topics)
    return (
        <div>
            <div className='mx-auto w-3/4'>
                <HomeHeader/>
            </div>
            <div className='grid grid-cols-3 w-3/4 mx-auto mt-40 gap-8'>
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}/>)
            }
            </div>
        </div>
    );
};

export default Home;