import { observer } from 'mobx-react';

import mainStore from 'store/MainStore';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import ImageList from 'components/ImageList/ImageList';
import ImageButtonPanel from 'components/ImageButtonPanel/ImageButtonPanel';
import MobileFilterPanel from 'components/FilterPanel/MobileFilterPanel';
import getFilteredTasks from 'helpers/filterImages';
import useMediaQuery from 'helpers/useMediaQuery';
import styles from './mainContent.module.scss';

const MainContent = () => {

    const isMobile = useMediaQuery('(max-width: 1040px)');

    const handleChangeFilter = (filterStatus) => {
        mainStore.setFilterStatus(filterStatus);
    };

    const { images, filterStatus } = mainStore.storeData;
    const filteredImages = getFilteredTasks(images, filterStatus);

    return (
        <main className={styles.mainContainer}>
            {isMobile ?
                <MobileFilterPanel
                    onChangeFilter={handleChangeFilter}
                />
                :
                <FilterPanel
                    onChangeFilter={handleChangeFilter}
                />
            }
            <ImageList
                isMobile={isMobile}
                images={filteredImages}
                onChangeFilter={handleChangeFilter}
            />
            <ImageButtonPanel
                isMobile={isMobile}
            />
        </main>
    )
}

export default observer(MainContent);