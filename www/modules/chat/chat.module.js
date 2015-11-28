(function () {
    'use strict';
    angular.module('starter')
        .controller('ChatController', function ($scope, $ionicPopup) {
            $scope.data = {}

            $scope.chatMessages = [
                {
                    'nick': 'Stefcio',
                    'message': 'Message 1'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 2'
                },
                {
                    'nick': 'Stefcio',
                    'message': 'Message 3'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 4'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 2'
                },
                {
                    'nick': 'Stefcio',
                    'message': 'Message 3'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 4'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 2'
                },
                {
                    'nick': 'Stefcio',
                    'message': 'Message 3'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 4'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 2'
                },
                {
                    'nick': 'Stefcio',
                    'message': 'Message 3'
                },
                {
                    'nick': 'Ancia',
                    'message': 'Message 4'
                }
            ];
            
            
            $scope.sendMessage = function () {
                $scope.chatMessages.push({
                    'nick': 'Marcin',
                    'message': $scope.data.message
                })
            };
            
            $scope.showMessagePopup = function () {

                if (!$scope.data.nick) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'No nick!',
                        template: 'Please set your nick before sending messages'
                    });

                    return;
                }

                var myPopup = $ionicPopup.show({
                    template: '<input ng-model="data.message">',
                    title: 'Message',
                    subTitle: "Send message as: " + $scope.data.nick,
                    scope: $scope,
                    buttons: [
                        { text: 'Cancel' },
                        {
                            text: '<b>Send</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!$scope.data.message) {
                                    e.preventDefault();
                                } else {
                                    return $scope.data.message;
                                }
                            }
                        },
                    ]
                });

                myPopup.then(function (res) {
                    console.log('Tapped!', {
                        nick: $scope.data.nick,
                        message: res
                    });
                });
            }

            $scope.showNickPopup = function () {
                var myPopup = $ionicPopup.show({
                    template: '<input ng-model="data.nick">',
                    title: 'Your nick',
                    scope: $scope,
                    buttons: [
                        { text: 'Cancel' },
                        {
                            text: '<b>Set</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!$scope.data.nick) {
                                    e.preventDefault();
                                } else {
                                    return $scope.data.nick;
                                }
                            }
                        },
                    ]
                });

                myPopup.then(function (res) {
                    console.log('Tapped!', res);
                });
            }
        });
})();