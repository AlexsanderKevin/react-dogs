import React from 'react'
import styles from './UserStatsGraph.module.css'

const UserStatsGraphs = ({ data }) => {
  const [ graph, setGraph ] = React.useState([])
  const [ total, setTotal ] = React.useState(0)

  React.useEffect(() => {
    const accessArray = data.map(({ acessos }) => Number(acessos))
    const totalAccesses = accessArray.reduce(( a, b ) => a + b)
    setTotal( totalAccesses )
  }, [ data ])

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={ styles.total }>
        <p>Acessos: { total || '0' }</p>
      </div>
    </section>
  )
}

export default UserStatsGraphs
