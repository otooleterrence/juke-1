'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.js';
import Sidebar from './sidebar.js';
import Footer from './footer.js';


// const hello = (
//   <h1 type='text'>Hello React</h1>
// );

const container = (
  <div>
    <Sidebar />
    <Footer />
    <Main />
  </div>
);

// ReactDOM.render(<Main />, document.getElementById('app'));
ReactDOM.render(container, document.getElementById('app'));


console.log('Hello React');
