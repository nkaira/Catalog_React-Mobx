import { observer } from 'mobx-react'
import cn from 'classnames';

import mainStore from 'store/MainStore';
import { FILTER_ALL, FILTER_DESIGN, FILTER_BRANDING, FILTER_ILLUSTRATION, FILTER_MOTION } from 'store/MainStore';
import styles from './filterPanel.module.scss';

const FilterPanel = ({ onChangeFilter }) => {

    const filterStatus = mainStore.storeData.filterStatus;

    const buttonAll = cn(styles.button, { [styles.activeButton]: filterStatus === FILTER_ALL });
    const buttonDesign = cn(styles.button, { [styles.activeButton]: filterStatus === FILTER_DESIGN });
    const buttonBranding = cn(styles.button, { [styles.activeButton]: filterStatus === FILTER_BRANDING });
    const buttonIllustration = cn(styles.button, { [styles.activeButton]: filterStatus === FILTER_ILLUSTRATION });
    const buttonMotion = cn(styles.button, { [styles.activeButton]: filterStatus === FILTER_MOTION });

    return (
        <section className={styles.filter}>
            <button className={buttonAll} onClick={() => onChangeFilter(FILTER_ALL)}> Show All </button>
            <button className={buttonDesign} onClick={() => onChangeFilter(FILTER_DESIGN)}> Design </button>
            <button className={buttonBranding} onClick={() => onChangeFilter(FILTER_BRANDING)}> Branding </button>
            <button className={buttonIllustration} onClick={() => onChangeFilter(FILTER_ILLUSTRATION)}> Illustration </button>
            <button className={buttonMotion} onClick={() => onChangeFilter(FILTER_MOTION)}> Motion </button>
        </section>
    )
}

export default observer(FilterPanel);

