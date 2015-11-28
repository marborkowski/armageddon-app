(function () {
    'use strict';
    angular.module('starter')
        .controller('DiscovererController', function ($scope, $timeout, $ionicPopup, $ionicLoading, bluetooth) {
            var discoverer = this;

            discoverer.contents = {
                devices: [],
                debug: [],
                selectedDevice: null
            };

            discoverer.debug = function (message) {
                //return discoverer.contents.debug.push(message);
            };

            discoverer.actions = {
                printFailureMessage: function (message) {
                    message = message || 'Unknown problem... [?]';
                    discoverer.debug(message);
                    $timeout(function() {
                        $ionicLoading.hide();
                    });
                },
                printDevices: function (devices) {
                    devices = devices || [];

                    discoverer.debug('printDevices()');

                    $timeout(function () {
                        $ionicLoading.hide();
                        discoverer.contents.devices.length = 0;
                        discoverer.contents.devices = null;
                        discoverer.contents.devices = angular.copy(devices);
                        discoverer.debug(devices);
                    });
                },
                discover: function () {
                    discoverer.debug('discover()');
                    $ionicLoading.show({
                        template: 'Looking for available devices...'
                    });
                    bluetoothSerial.list(discoverer.actions.printDevices, discoverer.actions.printFailureMessage);
                },
                connection: {
                    connectWith: function (device) {
                        var deviceId;

                        bluetooth.setSelectedDevice(device.id);

                        if(device.hasOwnProperty('uuid')) {
                            deviceId = device.uuid;
                        } else if(device.hasOwnProperty('address')) {
                            deviceId = device.address;
                        } else if(device.hasOwnProperty('id')) {
                            deviceId = device.id;
                        } else {
                            deviceId = '';
                        }

                        discoverer.debug('Requesting connection to ' + deviceId);
                        bluetoothSerial.connect(deviceId, discoverer.actions.connection.onConnect, discoverer.actions.connection.onDisconnect);
                    },
                    onConnect: function (msg) {
                        $timeout(function() {
                            $ionicPopup.alert({
                                title: 'Allright!',
                                template: msg
                            });

                            discoverer.contents.selectedDevice = bluetooth.getSelectedDevice();
                        });
                    },
                    onDisconnect: function (msg) {
                        $timeout(function() {
                            $ionicPopup.alert({
                                title: 'Ooops!',
                                template: msg
                            });

                            bluetooth.setSelectedDevice(null);
                            discoverer.contents.selectedDevice = null;
                        });
                    }
                }
            };

            $timeout(function() {
                discoverer.actions.discover();
            });

        });
})();