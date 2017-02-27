import React from 'react';
import {render} from 'react-dom';

import * as actions from '../actions'

describe('actions', () => {

    it('should create an action to toggle a task', () => {

        const id = 1
        const expectedAction = {
            type: actions.TOGGLE_TASK,
            payload: id
        }

        expect(actions.toggleTask(id)).toEqual(expectedAction)

    })

    it('should create an action to add a task', () => {

        const name = 'Ye ye'
        const expectedAction = {
            type: actions.ADD_TASK,
            payload: name
        }

        expect(actions.addTask(name)).toEqual(expectedAction)

    })

})