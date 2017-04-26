import React from 'react'

import Tasks from '../tasks'

import styles from './style.css'

const App = ({params}) => {

    return (
      <div className={styles.app}>
        <Tasks parentId={params.hasOwnProperty('taskID') ? parseInt(params.taskID, 10) : null} />
      </div>
    )

}

export default App