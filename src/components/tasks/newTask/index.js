import React from 'react'
import {connect} from 'react-redux'

import {addTask} from '../actions'

const NewTask = ({actions}) => {

    return <h1 onClick={() => actions.task.add('test')}>NewTask</h1>

}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    actions: {
        task: {
            add: name => {
                dispatch(addTask(name))
            }
        }
    }
})

const NewTaskConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTask)

export default NewTaskConnect