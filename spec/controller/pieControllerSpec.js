/**
 * Created by allenbklj on 8/20/15.
 */
describe('unit test for controller',function(){
   var $scope,controller;
    beforeEach(function(){
        module('pieApp');
        inject(function($controller){
            $scope = {};
            controller = $controller('pieController',{$scope:$scope});
        })
    });

    it('testing eat slice function',function(){
       expect($scope.slice).toBe(8);
        $scope.eatSlice();
        expect($scope.slice).toBe(7);
    });

    it('testing eat slice function',function(){
        $scope.slice = 0;
        expect($scope.slice).toBe(0);
    })
});