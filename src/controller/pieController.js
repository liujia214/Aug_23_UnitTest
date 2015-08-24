/**
 * Created by allenbklj on 8/20/15.
 */
var myApp = angular.module('pieApp',[]);

myApp.controller('pieController',function($scope){
    $scope.slice = 8;
    $scope.eatSlice = function(){
        if ($scope.slice > 0){
            $scope.slice--;
        }else{
            return 0;
        }
    }
});