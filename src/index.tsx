import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Box from './components/Box';
import './index.css';

ReactDOM.render(<Box message="Hi" />, document.getElementById(
  'root'
) as HTMLElement);
