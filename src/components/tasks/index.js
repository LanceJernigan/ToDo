import React from 'react'
import {connect} from 'react-redux'

import Task from './task/'
import NewTask from './newTask/'
import TaskListHeader from './taskListHeader/'

import {toggleTask} from './actions'

import styles from './style.css'

const getTopLevelTasks = tasks => tasks.filter( task => ( ! task.hasOwnProperty('parent') || task.parent === null))

const getChildrenTasks = (tasks, parentId) => tasks[parentId].children.map( id => tasks[id])

const TasksList = ({tasks, actions, parent = null}) => (
  <div className={styles.taskList}>
  
    <TaskListHeader parent={parent} />

    {tasks.map(Task)}

    <NewTask parent={parent.id} />

  </div>
)

const mapStateToProps = (state, {parentId}) => ({
    tasks: parentId === null ?
      getTopLevelTasks(state.tasks) :
      getChildrenTasks(state.tasks, parentId),
    parent: parentId !== null ?
      state.tasks[parentId] :
      {id: null, name: ''}
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
)(TasksList)

export default TasksConnect