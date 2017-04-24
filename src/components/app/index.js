import React from 'react'

import Tasks from '../tasks'

const App = ({params}) => {

    return <Tasks parent={params.hasOwnProperty('taskID') ? parseInt(params.taskID, 10) : null} />

}

export default App