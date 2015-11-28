(function () {
    'use strict';
    angular.module('starter')
        .controller('MapController', ['$scope', 'MapData', function($scope, MapData) {
            var vm = this;

            vm.leaflet = {
                center: {
                    autoDiscover: true
                }
            };

            MapData.saveMarker();

        }]);
})();