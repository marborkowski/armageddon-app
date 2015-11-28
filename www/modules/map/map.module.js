(function () {
    'use strict';
    angular.module('starter')
        .controller('MapController', ['$scope', function($scope) {
            var vm = this;

            vm.leaflet = {
                center: {
                    autoDiscover: true
                }
            };

        }]);
})();