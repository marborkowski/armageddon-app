(function () {
    'use strict';
    angular.module('starter')
        .controller('SettingsController', function($scope, $timeout) {
            var settings = this;

            settings.contents = {
                devices: [],
                debug: []
            };

            settings.debug = function(message) {
                //return settings.contents.debug.push(message);
            };

            settings.actions = {
                printFailureMessage: function(message) {
                    message = message || 'Unknown problem... [?]';
                    settings.debug(message);
                },
                printDevices: function(devices) {
                    devices = devices || [];

                    settings.debug('printDevices()');

                    $timeout(function() {
                        settings.contents.devices.length = 0;
                        settings.contents.devices = null;
                        settings.contents.devices = angular.copy(devices);
                        settings.debug(devices);
                    });
                },
                discover: function() {
                    //settings.debug('discover()');
                    bluetoothSerial.list(settings.actions.printDevices, settings.actions.printFailureMessage('List Failed'));
                }
            };

        });
})();