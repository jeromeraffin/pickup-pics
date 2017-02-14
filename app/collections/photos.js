'use strict'
class Photos {
    constructor(photosJSON) {
        this.data = [];

        photosJSON.forEach((pJson) => {
            let photo = new Photo(pJson);

            this.data.push(photo);
        })
    }
}
