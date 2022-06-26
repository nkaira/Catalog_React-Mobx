import { observer } from 'mobx-react';
import styles from './header.module.scss';

import HeaderNavigation from 'components/HeaderNavigation/HeaderNavigation';
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';

const Header = () => {
    return (
        <header className={styles.container}>
            <HeaderNavigation />
            <HeaderTitle />
        </header>
    )
}

export default observer(Header);