angular.module('starter')
    .factory('MapData', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage) {

        var types = ['water', 'food', 'danger', 'safezone', 'zombie'];

        var timespans = ['permanent', 'day', 'week', 'month'];

        var getOnlineMarkers = function() {

        };

        var getLocalMarkers = function() {

        };

        var getMarkers = function() {
            var deferred = $q.defer();

            deferred.resolve(($localStorage.getObject('markers') || []).map(function(marker) {
                marker.message = marker.type;
                return marker;
            }));

            return deferred.promise;
        };

        var saveMarkerOnline = function() {

        };

        var saveMarkerLocally = function() {

        };

        var saveMarker = function(marker) {
            var markers = $localStorage.getObject('markers') || [];
            markers.push(marker);
            $localStorage.setObject('markers', markers);
        };

        var getTypes = function() {
            return types;
        };

        var getTimeSpans = function() {
            return timespans;
        };

        return {
            getMarkers: getMarkers,
            saveMarker: saveMarker,
            getTypes: getTypes,
            getTimeSpans: getTimeSpans
        };
    }]);