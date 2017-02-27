import React from 'react'
import {connect} from 'react-redux'

import NewTask from './newTask/'

import {toggleTask} from './actions'

const Tasks = ({tasks, actions}) => {

    return (

        <div className="tasks">

            {tasks.map( task => {

                return (

                    <p className={task.complete && task.complete === true ? 'task task-complete' : 'task'} onClick={() => actions.task.toggle(task.id)} key={task.id}>{task.name}</p>

                )

            })}

            <NewTask />

        </div>

    )

}

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    actions: {
        task: {
            toggle: id => {
                dispatch(toggleTask(id))
            }
        }
    }
})

const TasksConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)

export default TasksConnect