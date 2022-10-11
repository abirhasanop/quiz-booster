import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    console.log(data.data)
    return (
        <div className='mx-auto w-1/2 mt-10'>
            <LineChart width={600} height={500} data={data.data}>
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Tooltip/>
                <Legend/>
            </LineChart>
        </div>
    );
};

export default Statistics;