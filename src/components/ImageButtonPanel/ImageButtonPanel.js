import { observer } from 'mobx-react';

import mainStore from 'store/MainStore';
import styles from './ImageButtonPanel.module.scss';

const ImageButtonPanel = () => {

    const handleRemoveImage = () => {
        mainStore.removeImage();
    }

    const handleLoadImage = () => {
        mainStore.loadImage();
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleLoadImage}>LOAD MORE</button>
            <button className={styles.button} onClick={handleRemoveImage}>DELETE</button>
        </div>
    )
}

export default observer(ImageButtonPanel);