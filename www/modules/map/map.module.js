(function () {
    'use strict';
    angular.module('starter')
        .controller('MapController', ['$scope', 'MapData', '$ionicModal', function($scope, MapData, $ionicModal) {
            var vm = this;

            vm.markers = [];

            vm.leaflet = {
                center: {
                    autoDiscover: true
                },
                events: {
                    map: {
                        enable: ['zoomstart', 'drag', 'click', 'mousemove'],
                        logic: 'emit'
                    }
                }
            };


            var currentMarker = {};

            var updateMarkers = function() {
                MapData.getMarkers().then(function(data) {
                    vm.markers = data;
                    console.log(data);
                });
            };
            updateMarkers();


            $scope.addMarkerModal = {
                close: function() {
                    vm.addMarkerModal.hide();
                },
                types: MapData.getTypes(),
                timeSpans: MapData.getTimeSpans(),
                save: function() {
                    currentMarker.type = $scope.addMarkerModal.type;
                    currentMarker.constancy = $scope.addMarkerModal.constancy;
                    currentMarker.timestamp = new Date().getTime();
                    MapData.saveMarker(currentMarker);
                    vm.addMarkerModal.hide();
                    updateMarkers();
                }
            };
            $scope.$on('leafletDirectiveMap.click', function(event, args){
                currentMarker = {};
                console.log('click', args.leafletEvent.latlng);
                currentMarker.lat = args.leafletEvent.latlng.lat;
                currentMarker.lng = args.leafletEvent.latlng.lng;

                $ionicModal.fromTemplateUrl('modules/map/add-marker-modal.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function(modal) {
                    vm.addMarkerModal = modal;
                    vm.addMarkerModal.show();
                });
            });

            //MapData.saveMarker();

        }]);
})();