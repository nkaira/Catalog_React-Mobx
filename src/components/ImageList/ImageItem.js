import { observer } from 'mobx-react';

import styles from './imageList.module.scss';

const ImageItem = ({ url, name, category, onChangeFilter, dataSetId }) => {

    return (
        <li className={styles.image}>
            <div className={styles.image__item} data-id={`${dataSetId}`}>
                <img className={styles.image__img} src={url} alt='' />
                <div className={styles.image__title}>{name}</div>
                <button className={styles.image__button} onClick={() => onChangeFilter(category)}>{category}</button>
            </div>
        </li>
    )
}

export default observer(ImageItem);