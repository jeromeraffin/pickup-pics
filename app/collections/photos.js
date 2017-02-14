'use strict'
class Photos {
    contructor(photosJSON) {
        this.data = [];

        photosJSON.forEach((pJson) => {
            let photo = new Photo(pJson);

            this.data.push(photo);
        })
    }
}
