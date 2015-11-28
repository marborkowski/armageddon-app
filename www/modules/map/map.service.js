angular.module('starter')
    .factory('MapData', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage) {

        var dummyMarkers = [
            {

            }
        ];

        var getOnlineMarkers = function() {

        };

        var getLocalMarkers = function() {

        };

        var getMarkers = function() {
            var deferred = $q.defer();



            return deferred.promise;
        };

        var saveMarkerOnline = function() {

        };

        var saveMarkerLocally = function() {

        };

        var saveMarker = function() {
            $localStorage.set('test', 'abc');
        };

        return {
            getMarkers: getMarkers,
            saveMarker: saveMarker
        };
    }]);