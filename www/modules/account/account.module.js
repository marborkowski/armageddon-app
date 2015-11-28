(function () {
    'use strict';
    angular.module('starter')
        .controller('AccountController', function ($scope, user) {
            var account = this;

            $scope.$watch('account.form', function() {
                user.data = null;
                user.data = angular.copy(account.form);
            }, true);
        });
})();