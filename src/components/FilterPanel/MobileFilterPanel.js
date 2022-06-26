import { observer } from 'mobx-react'
import { useState } from 'react';

import { FILTER_ALL, FILTER_DESIGN, FILTER_BRANDING, FILTER_ILLUSTRATION, FILTER_MOTION } from 'store/MainStore';
import styles from './mobileFilterPanel.module.scss';

const MobileFilterPanel = ({ onChangeFilter }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChangeFilter(option);
    }

    return (
        <section className={styles.container}>
            <div className={styles.selectBox}>
                {isOpen && <div className={styles.optionsContainer}>
                    <div onClick={() => handleSelect(FILTER_ALL)} className={styles.option}>
                        Show All
                    </div>
                    <div onClick={() => handleSelect(FILTER_DESIGN)} className={styles.option}>
                        Design
                    </div>
                    <div onClick={() => handleSelect(FILTER_BRANDING)} className={styles.option}>
                        Branding
                    </div>
                    <div onClick={() => handleSelect(FILTER_ILLUSTRATION)} className={styles.option}>
                        Illustration
                    </div>
                    <div onClick={() => handleSelect(FILTER_MOTION)} className={styles.option}>
                        Motion
                    </div>
                </div>}
                <div onClick={toggleOpen} className={styles.selected}>
                    {selectedOption || FILTER_ALL}
                </div>
            </div>
        </section>
    )
}

export default observer(MobileFilterPanel);