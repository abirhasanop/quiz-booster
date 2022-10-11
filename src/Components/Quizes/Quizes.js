import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Qiuz from '../Quiz/Qiuz';

const Quizes = () => {
    const quizesObj = useLoaderData()
    const quizes = quizesObj.data.questions
    // console.log(quizes)
    const handleAns = (option) => {
        const match = quizes.find(qz => qz.correctAnswer === option)
        if(match){
            notify("Correct Ans")
        }else{
            notify("Wrong Ans")
        }
    }
    const notify = (message) => toast(message);

    return (
        <div className='w-1/2 mx-auto'>
            {
                quizes.map((quiz, index) => <Qiuz key={quiz.id} index={index} handleAns={handleAns} quiz={quiz}/>)
            }
            <ToastContainer/>
        </div>
    );
};

export default Quizes;