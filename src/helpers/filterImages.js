import { FILTER_ALL, FILTER_DESIGN, FILTER_BRANDING, FILTER_ILLUSTRATION, FILTER_MOTION } from 'store/MainStore';

function getFilteredTasks(images, filterStatus) {
    switch (filterStatus) {
        case FILTER_ALL:
            return images;
        case FILTER_DESIGN:
            return images.filter(img => img.category.includes(FILTER_DESIGN));
        case FILTER_BRANDING:
            return images.filter(img => img.category.includes(FILTER_BRANDING));
        case FILTER_ILLUSTRATION:
            return images.filter(img => img.category.includes(FILTER_ILLUSTRATION));
        case FILTER_MOTION:
            return images.filter(img => img.category.includes(FILTER_MOTION));
        default:
            return images;
    }
}

export default getFilteredTasks;




