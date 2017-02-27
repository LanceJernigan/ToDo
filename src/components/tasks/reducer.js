import {TOGGLE_TASK} from './actions'
import {ADD_TASK} from './actions'

const initialState = [
    {
        id: 1,
        name: 'Ye ye'
    }
]

const taskActions = {
    default: state => state,
    [TOGGLE_TASK]: (state, id) => {

        return state.map( task => {

            task.complete = task.id === id ? ! task.complete : task.complete

            return task

        })

    },
    [ADD_TASK]: (state, task) => {

        if (task.constructor === String)
            task = {
                name: task
            }

        if (! task.hasOwnProperty('name'))
            return state

        task.id = state.length + 1

        return [...state, task]

    }
}

const tasksReducer = (state = initialState, action) => {

    const type = taskActions.hasOwnProperty(action.type) ? action.type : 'default'
    return taskActions[type](state, action.payload)

}

export default tasksReducer