(function () {
    'use strict';
    angular.module('starter')
        .controller('ChatController', function ($scope, $ionicPopup) {
            $scope.data = {nick: 'Me'};

            $scope.chatMessages = [
                {
                    'nick': 'John',
                    'message': 'Need antybiotics!'
                },
                {
                    'nick': 'Allen',
                    'message': 'I have one package for you.'
                },
                {
                    'nick': 'Jim',
                    'message': 'Guys we have visitors from the North. Post office. Need backup'
                },
                {
                    'nick': 'John',
                    'message': 'My arm is bleeding, can somebody help me please?!'
                }
            ];
            
            
            $scope.sendMessage = function () {
                $scope.chatMessages.push({
                    'nick': 'Me',
                    'message': $scope.data.message
                })

                $scope.data.message = '';
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
                    title: 'Me',
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
                        }
                    ]
                });

                myPopup.then(function (res) {
                    console.log('Tapped!', res);
                });
            }
        });
})();