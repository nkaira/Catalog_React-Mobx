import { observer } from 'mobx-react';

import styles from './headerTitle.module.scss';

const HeaderTitle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Portfolio</div>
            <div className={styles.subTitle}>Agency provides a full service range including technical skills, design, business understanding.</div>
        </div>
    )
}

export default observer(HeaderTitle);