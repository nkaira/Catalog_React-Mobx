import { observer } from 'mobx-react';

import mainStore from 'store/MainStore';
import ImageItem from 'components/ImageList/ImageItem';
import styles from './imageList.module.scss';

const ImageList = ({ images, onChangeFilter }) => {

    const handleImageActive = (event) => {
        if (event.target.tagName === 'IMG') {
            event.target.parentNode.classList.toggle(styles.imageActive)
            const imageId = Number(event.target.parentNode.dataset.id);
            mainStore.activeImage(imageId)
        }
    }

    return (
        <section className={styles.container}>
            <ul className={styles.imageList} onClick={(event) => handleImageActive(event)}>
                {images.map(item => (
                    <ImageItem
                        key={item.id}
                        dataSetId={item.id}
                        url={item.img}
                        name={item.name}
                        category={item.category}
                        onChangeFilter={onChangeFilter}
                    />
                ))}
            </ul>
        </section>
    )
}

export default observer(ImageList);

