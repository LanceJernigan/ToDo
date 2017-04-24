import React from 'react'
import {connect} from 'react-redux'

import {addTask} from '../actions'

const NewTask = ({actions, parent}) => {

    return <input onKeyPress={(e) => {
      if (e.charCode === 13) {
        actions.task.add({name: e.currentTarget.value, parent: parent})
        e.currentTarget.value = ''
      }
    }} />

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