import React from 'react';
import './HomeHeader.css'
import img from '../../Images/header.jpg'

const HomeHeader = () => {
    return (
        <div className='flex justify-around items-center'>
            <div className='header-main mt-7'>
                <img src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <h1 className="text-2xl-font-semibold">
                    Quizzes encourage pupils' self awareness of progress.
                </h1>
                <p className='text-2xl'>
                    JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS and React is a free and open-source front-end JavaScript library for building user interfaces based on UI components and Cascading Style Sheets is a style sheet language used for describing the presentation of a document. Git is free and open source software for distributed version control: tracking changes in any set of files,
                </p>
            </div>
        </div>
        
    );
};

export default HomeHeader;