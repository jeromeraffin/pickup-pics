'use strict'

angular.module("photoList").controller("photoListController", ["$http", function photoListController($http) {
    let photosCollection;

    $http.get("/photos.json").then((response) => {
        photosCollection = new Photos(response.data)
        this.photos = photosCollection.data;
    })
}])
