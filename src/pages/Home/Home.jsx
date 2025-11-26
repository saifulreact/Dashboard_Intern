import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const Home = () => {
  return (
 <div className="main_div flex items-center justify-center min-h-[100vh] bg-amber-200">

<div className="container">
    <div className="one w-1/3">
       <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
          <div className='w-2.5 bg-red-400 '>
              <h1>See all the data here of you dashboard</h1>

          </div>

          <div className='w-[265px] h-[103px] bg-[#E8EDF2] rounded-[16px]'>
            <div className="inside_div">
              <div className="toe flex justify-between">
                <p className='text-[#000000] textf-[14px] font-poppin'>Total sells</p>
                <span><BsThreeDotsVertical />
</span>
              </div>
              <div className="middle">
                <div>
                  <span><h1>hi</h1></span>
                <p>$126.500</p>
                </div>
                <div>
                  <span>hello</span>
                  <p className='text-[#50D1B2] font-poppin font-bold text-[16px]'>34.7%</p>
                </div>
                <div className='flex justify-end'>
                  <p className='font-poppin font-normal text-[15px] text-[#000000]'>Compared to Jan 2022</p>
                </div>
              </div>
            </div>

          </div>
</div>
 </div>
  );
};

export default Home;