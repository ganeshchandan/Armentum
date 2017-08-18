import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/components/Home';
import {Provider} from 'react-redux';
import {store} from '../src/Store/Store';

console.log("ganesh store app",store);

require('../styles/base.less'); 

ReactDOM.render(
  <Provider store={store}>
                    <Home/>
                </Provider>,
  document.getElementById('app')
);