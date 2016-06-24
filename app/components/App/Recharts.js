import React from 'react'
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts'

const data = [
      {name: 'Run A', positive: 60, negative: -40},
      {name: 'Run B', positive: 70, negative: -30},
      {name: 'Run C', positive: 80, negative: -20},
      {name: 'Run D', positive: 75, negative: -25},
      {name: 'Run E', positive: 70, negative: -30},
      {name: 'Run F', positive: 65, negative: -35},
      {name: 'Run G', positive: 55, negative: -45},
      {name: 'Run H', positive: 60, negative: -40},
      {name: 'Run I', positive: 70, negative: -30},
      {name: 'Run J', positive: 80, negative: -20},
];

const barWidth = 36;

const Recharts = () => (
  <div>
    <h2>Recharts</h2>
    <BarChart
      width={800}
      height={300}
      data={data}
      margin={{top: 20, right: 10, left: 10, bottom: 5}}
      barGap={-barWidth}
      barSize={barWidth}
    >
      <XAxis tick={false} tickLine={false} />
      <YAxis type="number" domain={[-100, 100]} tickFormatter={(value) => `${value}%`} />
      <CartesianGrid vertical={false}/>
      <ReferenceLine y={0} stroke='#000'/>
      <Bar dataKey="positive" fill="#c0c0c0" isAnimationActive={false} />
      <Bar dataKey="negative" fill="#bf2828" isAnimationActive={false} />
    </BarChart>
  </div>

)

export default Recharts
