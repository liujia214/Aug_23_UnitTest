/**
 * Created by allenbklj on 8/23/15.
 */
describe('testing directive',function(){
    var $compile,$rootScope;
    beforeEach(
        module('pieApp')

    );

    beforeEach(inject(function(_$compile_,_$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replace the element with the appropriate content',function(){
        var element = $compile('<my-pie></my-pie>')($rootScope);
        console.log(element);
        expect(element[0].innerHTML).toEqual('Delicious Pie');
        expect(element.html()).toEqual('Delicious Pie');
    });

});
