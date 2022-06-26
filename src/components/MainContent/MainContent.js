import { observer } from 'mobx-react';

import mainStore from 'store/MainStore';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import ImageList from 'components/ImageList/ImageList';
import ImageButtonPanel from 'components/ImageButtonPanel/ImageButtonPanel';
import styles from './mainContent.module.scss';
import { getFilteredTasks } from 'helpers/filterImages';

const MainContent = () => {

    const handleChangeFilter = (filterStatus) => {
        mainStore.setFilterStatus(filterStatus);
    };

    const { images, filterStatus } = mainStore.storeData;
    const filteredImages = getFilteredTasks(images, filterStatus);

    return (
        <main className={styles.mainContainer}>
            <FilterPanel
                onChangeFilter={handleChangeFilter}
            />
            <ImageList
                images={filteredImages}
                onChangeFilter={handleChangeFilter}
            />
            <ImageButtonPanel />
        </main>
    )
}

export default observer(MainContent);


