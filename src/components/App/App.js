import React from 'react';
import { observer } from 'mobx-react'

import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';
import styles from './app.module.scss';

const App = () => {

    return (
        <div className={styles.wrapper}>
            <Header />
            <MainContent />
        </div>
    )
}

export default observer(App);