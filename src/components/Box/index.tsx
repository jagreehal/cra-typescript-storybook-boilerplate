import React, { SFC } from 'react';

import './Box.css';

interface IProps {
  message: string;
}

const Box: SFC<IProps> = ({ message }) => {
  return <div className="box">{message}</div>;
};

export default Box;
