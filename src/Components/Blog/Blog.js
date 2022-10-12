import React from 'react';

const Blog = () => {
    return (
        <div className='w-full lg:w-3/4 mx-auto shadow-2xl p-8 h-screen'>
            <header>
                <h1 className='text-center text-4xl font-semibold'>Blog</h1>
            </header>
            <section className='mt-10'>
                <h1 className='text-3xl font-semibold'>What is the purpose of React Router?</h1>
                <p className='text-xl mt-4'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React Router is a state container for the current location , or URL. It keeps track of the location and renders different s as it changes</p>
            </section>
            <section className='mt-10'>
                <h1 className='text-3xl font-semibold'>How does context API works?</h1>
                <p className='text-xl mt-4'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </section>
            <section className='mt-10'>
                <h1 className='text-3xl font-semibold'>what is usehref in react?</h1>
                <p className='text-xl mt-4'>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
            </section>
        </div>
    );
};

export default Blog;