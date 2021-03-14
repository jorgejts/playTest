import React from 'react';

import styles from './loading.module.scss';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => <div className={styles.container}>Loading...</div>;

export default Loading;
