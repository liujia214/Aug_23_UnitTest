/**
 * Created by allenbklj on 8/20/15.
 */
myApp.value('DessertValue',{
    pies:[
        {flavor:'cherry',score:20},
        {flavor:'apple',score:43},
        {flavor:'grape',score:12}
    ]
}).factory('DessertManager',function(DessertValue){
    return{
        pieFlavor:function(){
            return DessertValue.pies.map(function(pie){
                return pie.flavor;
            })
        },
        pieFlavorSort:function(){
            DessertValue.pies.sort(function(a,b){
                if(a.score > b.score){
                    return 1;
                }
                if(a.score < b.score){
                    return -1;
                }
                return 0;
            });
            return DessertValue.pies;
        }
    }
}).service('DessertSvc',function($window){
    this.showDialog = function(message){

            $window.alert(message);

    }
});