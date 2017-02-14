'use strict'

// On crée notre component photoList et on lui associe son template et son controller
angular.module("photoList").component("photoList", {
    templateUrl: "/app/components/photoList/photoListTemplate.html",
    controller: "photoListController"
})
