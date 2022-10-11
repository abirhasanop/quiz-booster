import React from 'react';

const Qiuz = ({quiz, index, handleAns}) => {
    let {question, options} = quiz
   const newsQuestion =  question.slice(3, question.length -4)
    // console.log(quiz)
    return (
        <div className='border border-spacing-2 border-orange-400 m-10 rounded-lg p-10'>
            <div>
                <h1 className="text-2xl font-bold">Quiz {index + 1} : {newsQuestion}?</h1>
            </div>
            {/* OPtions */}
            <div className='grid grid-cols-2'>
                {
                    options.map(option => 
                        <div onClick={() => handleAns(option)} className='flex items-center mt-5'>
                            <input type="checkbox"/>
                            <p className='ml-4 font-semibold text-xl'>{option}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Qiuz;