import React from 'react';

import styles from './personData.module.scss';

interface PersonDataProps {
  title: string;
  value: string;
}

const PersonData: React.FC<PersonDataProps> = ({ title, value }) => (
  <div className={styles.container}>{`${title}: ${value}`}</div>
);

export default PersonData;
