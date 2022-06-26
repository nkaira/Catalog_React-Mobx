import { makeAutoObservable } from 'mobx';

// all of this data images should come from the backend endpoint
import bitmap0 from 'img/main_images/bitmap0.jpg';
import bitmap1 from 'img/main_images/bitmap1.jpg';
import bitmap2 from 'img/main_images/bitmap2.jpg';
import bitmap3 from 'img/main_images/bitmap3.jpg';
import bitmap4 from 'img/main_images/bitmap4.jpg';
import bitmap5 from 'img/main_images/bitmap5.jpg';
import bitmap6 from 'img/main_images/bitmap6.jpg';
import bitmap7 from 'img/main_images/bitmap7.jpg';
import bitmap8 from 'img/main_images/bitmap8.jpg';

const uniqId = () => {
    const uniq = Math.round(Date.now() + Math.random() * 1000000);
    return uniq;
}

export const imageArray = [
    {
        id: 1,
        name: 'SOFA',
        img: bitmap0,
        category: 'Design'
    },
    {
        id: 2,
        name: 'KeyBoard',
        img: bitmap1,
        category: 'Branding'
    },
    {
        id: 3,
        name: 'Work Media',
        img: bitmap2,
        category: 'Illustration'
    },
    {
        id: 4,
        name: 'DDDone',
        img: bitmap3,
        category: 'Motion'
    },
    {
        id: 5,
        name: 'Abstract',
        img: bitmap4,
        category: 'Design'
    },
    {
        id: 6,
        name: 'HandP',
        img: bitmap5,
        category: 'Branding'
    },
    {
        id: 7,
        name: 'Architect',
        img: bitmap6,
        category: 'Motion'
    },
    {
        id: 8,
        name: 'CalC',
        img: bitmap7,
        category: 'Design'
    },
    {
        id: 9,
        name: 'Sport',
        img: bitmap8,
        category: 'Branding'
    }
]

// for example to generate the same image array with different id (this operation should take place on the backend side)
function AddUniqId(array) {
    const updatedArray = [...array].map(item => {
        return { ...item, id: uniqId() }
    })
    return updatedArray;
};

// for example if we need to add a new field to the object that came from the backend
function addField(array) {
    const updatedArray = [...array].map(item => {
        return { ...item, isActive: false, id: uniqId() }
    })
    return updatedArray;
};

const updatedImageArray = addField(imageArray);

export const FILTER_ALL = 'FILTER_ALL';
export const FILTER_DESIGN = 'Design';
export const FILTER_BRANDING = 'Branding';
export const FILTER_ILLUSTRATION = 'Illustration';
export const FILTER_MOTION = 'Motion';

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }

    _storeData = {
        filterStatus: FILTER_ALL,
        images: updatedImageArray,
    }

    get storeData() {
        return this._storeData
    }

    setFilterStatus(filterStatus) {
        this._storeData.filterStatus = filterStatus;
    }

    activeImage(targetImageId) {
        const images = [...this.storeData.images].map(image => {
            if (image.id === targetImageId) {
                return { ...image, isActive: !image.isActive };
            }
            return { ...image };
        })
        this._storeData.images = images;
    }

    removeImage() {
        const images = this.storeData.images.filter(image => (!image.isActive));
        this._storeData.images = images;
    }

    loadImage() {
        const images = [...this.storeData.images, ...AddUniqId(imageArray)];
        this._storeData.images = images;
    }
};

export default new MainStore();