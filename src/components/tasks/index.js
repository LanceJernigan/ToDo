import React from 'react'
import {connect} from 'react-redux'

import Task from './task/'
import NewTask from './newTask/'

import {toggleTask} from './actions'

import styles from './style.css'

const Tasks = ({tasks, actions, parent = null}) => {

    return (

        <div className={styles.tasks}>

          {tasks.map( task => <Task task={task} />)}

          <NewTask parent={parent} />

        </div>

    )

}

const mapStateToProps = (state, {parent}) => ({
    tasks: parent === null ? state.tasks.filter( task => ( ! task.hasOwnProperty('parent') || task.parent === null)) : state.tasks[parent].children.map( id => state.tasks[id])
})

const mapDispatchToProps = dispatch => ({
    actions: {
      toggle: id => {
          dispatch(toggleTask(id))
      }
    }
})

const TasksConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)

export default TasksConnect