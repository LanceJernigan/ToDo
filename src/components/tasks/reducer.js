import {TOGGLE_TASK} from './actions'
import {ADD_TASK} from './actions'

const initialState = []

for (let i = 0; i < 110; i++) {
  
  let task = {
      id: i,
      name: `Task ${i}`,
      parent: i > 9 ? (i % 10) : null,
      children: []
  }
  
  if (task.parent !== null) {
    
    initialState[task.parent].children.push(task.id)
    
  }
  
  initialState.push(task)
  
}

const taskActions = {
    default: state => state,
    [TOGGLE_TASK]: (state, id) => {

        return state.map( task => {

            task.complete = task.id === id ? ! task.complete : task.complete

            return task

        })

    },
    [ADD_TASK]: (state, task) => {

        if (! task.hasOwnProperty('name') || task.name.length === 0)
            return state

        task.id = state.length
        task.children = []
        
        if (task.hasOwnProperty('parent') && task.parent !== null) {
          
          const parent = state[task.parent]
          
          if (! parent.hasOwnProperty('children'))
            parent.children = []
          
          state = [
            ...state.slice(0, task.parent),
            {
              ...parent,
              children: [
                ...parent.children,
                task.id
              ]
            },
            ...state.slice(task.parent + 1)
          ]
          
        }

        return [...state, task]

    }
}

const tasksReducer = (state = initialState, action) => {

    const type = taskActions.hasOwnProperty(action.type) ? action.type : 'default'
    return taskActions[type](state, action.payload)

}

export default tasksReducer