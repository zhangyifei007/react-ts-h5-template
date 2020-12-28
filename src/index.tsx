import '@/assets/css/common.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
document.getElementsByTagName('body')[0].style.setProperty('--height-primary', `${window.innerHeight}px`);
window.addEventListener('resize', () => {
  document.getElementsByTagName('body')[0].style.setProperty('--height-primary', `${window.innerHeight}px`);
})

render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
