import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import 'apexcharts'

export const Chart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "series-1",
        type: "area",
        data: [2800, 4200, 3200, 3800, 3300, 4110, 3500]
      }
    ],
    options: {
      chart: {
        toolbar: {
          show: false
        },
        fontFamily: "Nunito",
        zoom:{
          enabled: false
        }
      },
      xaxis: {
        categories: [0, 1, 2, 3, 4, 5, 6, 7]
      },
      zoom: {
        enabled: false
      },
      stroke: {
        width: 0.99,
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Bảng thống kê theo tuần"
      },
      subtitle:{
        text:'1 ngay nao do'
      },tooltip:{
        enabled: true,
        x:{
          show: false
        },
        y:{
          title: {
            formatter: ()=>''
        },
        }
      }
    }
  })

  return (
    <div className='chart-bg'>
      <div className='chart'>
        <ReactApexChart
          series={state.series}
          type="area"
          width={750}
          height={450}
          options={state.options}
        />
      </div>

    </div>
  )
}
// export default Chart