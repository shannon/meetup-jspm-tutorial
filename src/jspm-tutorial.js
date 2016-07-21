import angular from 'angular';
import ngMaterial from 'angular-material';

angular.module('jspmTutorial', ['ngMaterial'])
    .controller('appCtrl', function ($scope) {
        $scope.foo = 'foobar';
    });

export default 'jspmTutorial';