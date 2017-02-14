'use strict'
class Photo {
    constructor(json) {
        this.category = json.category;
        this.small = json.small;
        this.medium = json.medium;
        this.large = json.large;
    }
}
