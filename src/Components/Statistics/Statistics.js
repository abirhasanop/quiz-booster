import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    return (
        <div>
            <LineChart width={600} height={500} data={data}>

            </LineChart>
        </div>
    );
};

export default Statistics;