import React from 'react'

import {Link} from 'react-router'

import styles from './style.css'

const TaskListHeader = ({parent}) => (
  <div className={styles.taskListHeader}>
    <Link to={`/${parent.hasOwnProperty('parent') && parent.parent !== null ? parent.parent : ''}`}>{parent.hasOwnProperty('name') ? `< Back ${parent.name}` : '< Back'}</Link>
  </div>
)

export default TaskListHeader