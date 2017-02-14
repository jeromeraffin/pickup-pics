'use strict'
class Photo {
    constructor(json) {
        this.category = json.category;
        this.small = "https://jeromeraffin.github.io/pickup-pics/" +json.small;
        this.medium = "https://jeromeraffin.github.io/pickup-pics/" +json.medium;
        this.large = "https://jeromeraffin.github.io/pickup-pics/" +json.large;
    }

    // getUrlImage(image) {
    //     let UrlImage = "http://" + $location.host() + image;
    //     return UrlImage;
    // }
}
