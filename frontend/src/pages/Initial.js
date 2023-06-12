import { Link } from "react-router-dom";
import styled from "styled-components";
import Plant from '../assets/plant.png';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";


import "./style.css";

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]



export default function Initial() {
  const [page, setPage] = useState('overview');

  return (
    <>
      <header>
        <button onClick={() => setPage('overview')}>Overview</button>
        <button onClick={() => setPage('telemetry')}>Telemetry</button>
        <button>Devices</button>
      </header>
      <main>
        {page === 'overview' ?
          <div className="box">
            <div className="ground">
              <img className="plant1" src={Plant} />
              <img className="plant2" src={Plant} />
              <img className="plant3" src={Plant} />
              <img className="plant4" src={Plant} />
            </div>
          </div>
          : <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        }
      </main>
      <footer>
        Designed by Shen
      </footer>
    </>
  );
}

/**************************** css ****************************/

const Div = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: var(--white-base);
  font-size: 30px;

  a {
    text-decoration: underline;
  }
`;
