import React from 'react'
import {Link} from 'react-router'

import styles from './style.css'

const Task = (task) => (
  <Link to={`/${task.id}`} className={styles.task} key={task.id}>{task.name}</Link>
)

export default Task