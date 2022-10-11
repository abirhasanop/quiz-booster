import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {logo, name, id} = topic
    return (
        <div className="border border-2 border-orange-500 w-96 p-8 rounded-md bg-orange-100">
            <div>
                <div>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className='flex justify-between mt-5'>
                    <h2 className='text-2xl'>{name}</h2>
                    <button className='py-2 px-6 text-white rounded-full bg-slate-700'>
                        <Link to={`/quizes/${id}`}>Get Quiz</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topic;