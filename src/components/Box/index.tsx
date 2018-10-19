import React, { SFC } from 'react';

import * as styles from './Box.scss';

interface IProps {
  message: string;
}

const Box: SFC<IProps> = ({ message }) => {
  return <div className={styles.box}>{message}z</div>;
};

export default Box;
