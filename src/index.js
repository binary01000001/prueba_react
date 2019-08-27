/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 */

/*  const element = document.createElement('h1');
 element.innerText = "Estoy programando con fe!";

 const container = document.getElementById('app');
 container.appendChild(element); */

 import React from 'react'; //create element
 import ReactDOM from 'react-dom'; //appendChild
 import Badge from './componentes/Badge/Badge'
 //import "./styles.scss";


 /* const element = <h1>El mundo es más cruel de lo que parece</h1>; */
 const container = document.getElementById('app');

 ReactDOM.render(<Badge/>, container);
