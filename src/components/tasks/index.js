import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import NewTask from './newTask/'

import {toggleTask} from './actions'

const Tasks = ({tasks, actions, parent = null}) => {

    return (

        <div className="tasks">

            {tasks.map( task => (task.hasOwnProperty('parent') && task.parent === parent ?
              <Link to={`/${task.id}`} className={task.complete && task.complete === true ?
                  'task task-complete' :
                  'task'
                } style={{textDecoration: (task.complete ?
                  'line-through' :
                  'none'
                ), display: 'block'}} key={task.id}>{task.name} : {task.id}</Link>
              : null
            ))}

            <NewTask parent={parent} />

        </div>

    )

}

const mapStateToProps = state => ({
    tasks: state.tasks
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