import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import List from '../components/List';
import Store from '../store'





ReactDOM.render(<Provider store={Store} ><List /></Provider>,document.getElementById('app'));