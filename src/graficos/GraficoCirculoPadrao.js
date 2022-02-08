import React from 'react';
import {Cell,Pie,PieChart} from 'recharts'
export default function GraficoCirculoPadrao() {
    const data = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 500
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ]
  return <div>
        <PieChart width={270} height={250}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
            {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                ))
            }
        </Pie>
        </PieChart>
  </div>;
}
