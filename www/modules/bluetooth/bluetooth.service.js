(function () {
    'use strict';
    angular.module('starter')
        .factory('bluetooth', function () {
            var bluetooth =  {
                _selectedDevice: null,
                getSelectedDevice: function() {
                    return bluetooth._selectedDevice;
                },
                setSelectedDevice: function(device) {
                    bluetooth._selectedDevice = device || null;
                }
            };

            return bluetooth;
        });
})();