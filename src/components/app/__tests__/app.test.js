import React from 'react';
import {render} from 'react-dom';
import routes from '../../../routes'

it('renders without crashing', () => {

    const div = document.createElement('div');
    render(routes, div);

});
