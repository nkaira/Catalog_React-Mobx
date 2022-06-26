import { observer } from 'mobx-react'

import logo from 'img/icons/logo.png';
import styles from './headerNavigation.module.scss';

const HeaderNavigation = () => {
    return (
        <div className={styles.container}>
            <a href="#"><img src={logo} alt=''></img></a>
            <ul className={styles.navigation}>
                <li><a href="https://en.wikipedia.org/wiki/HTML">About</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Service">Services</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Pricing">Pricing</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Blog">Blog</a></li>
            </ul>
            <button className={styles.button}>CONTACT</button>
        </div>
    )
}

export default observer(HeaderNavigation);