import React from 'react'
import styles from './UserStatsGraph.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [ graph, setGraph ] = React.useState([])
  const [ total, setTotal ] = React.useState(0)

  React.useEffect(() => {
    const graphData = data.map( item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })
    setGraph( graphData )

    const accessArray = data.map(({ acessos }) => Number(acessos))
    const totalAccesses = accessArray.reduce(( a, b ) => a + b)
    setTotal( totalAccesses )
  }, [ data ])

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={` ${styles.total} ${styles.graphItem} `}>
        <p>Acessos: { total || '0' }</p>
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryPie 
          data={graph} 
          innerRadius={50} 
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#ffffff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333333'
            }
          }}
        />
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs
