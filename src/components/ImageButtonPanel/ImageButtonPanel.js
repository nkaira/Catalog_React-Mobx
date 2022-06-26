import { observer } from 'mobx-react';
import cn from "classnames";

import mainStore from 'store/MainStore';
import styles from './ImageButtonPanel.module.scss';

const ImageButtonPanel = ({ isMobile }) => {

    const handleRemoveImage = () => {
        mainStore.removeImage();
    }

    const handleLoadImage = () => {
        mainStore.loadImage();
    }

    const buttonDelete = cn(styles.button, { [styles.button__delete]: isMobile })

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleLoadImage}>LOAD MORE</button>
            <button className={buttonDelete} onClick={handleRemoveImage}>DELETE</button>
        </div>
    )
}

export default observer(ImageButtonPanel);