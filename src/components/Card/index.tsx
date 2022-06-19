import React, { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import './index.css';
ChartJS.register(...registerables);

const CardComponent = ({ dataSet }: any) => {
  const [data, setData] = useState({ datasets: [] });
  useEffect(() => {
    const labels = dataSet.List.map((item: any) => new Date(item.date).toLocaleDateString() + " " + new Date(item.date).toLocaleTimeString())
    const newData: any = {
      labels,
      datasets: [
        {
          type: 'line' as const,
          label: 'Dataset 1',
          fill: false,
          borderColor: "orange",
          borderWidth: 2,
          pointRadius: 2,
          data: dataSet.List.map((item: any) => parseFloat(item.value)),
        }
      ],
    };
    setData(newData)
  }, [dataSet]);
  const chartRef = useRef<ChartJS>(null);

  return (
    <React.Fragment>
      {data && data.datasets && data.datasets.length > 0 && (
        <div className='Card'>
          <div className='CardBody'>
            <div className='title'>{String(dataSet.name).toLocaleUpperCase()}</div>
            {dataSet.List.length > 0 ? (<div className='Chart'>
              <Chart
                ref={chartRef}
                type='bar'
                options={{
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  locale: 'en-US'
                }}
                data={data}
              />
            </div>) : (<div>Fetching...</div>)}

            <div className='Avg'>Avg: {parseFloat(dataSet.avg).toLocaleString('en-US') + " USD"}</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default CardComponent;