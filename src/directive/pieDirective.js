/**
 * Created by allenbklj on 8/20/15.
 */
myApp.directive('myPie',function(){
   return{
       restrict:'E',
       template:'<h1>Delicious Pie</h1>',
       replace:true
   }
});