import React from 'react'

import Tasks from '../tasks'

const App = ({params}) => {

    return <Tasks parent={params.hasOwnProperty('taskID') ? params.taskID : null} />

}

export default App