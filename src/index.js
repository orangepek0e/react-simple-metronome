import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Metronome />, document.getElementById('root'));
serviceWorker.register();
