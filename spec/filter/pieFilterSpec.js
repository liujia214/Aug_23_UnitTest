/**
 * Created by allenbklj on 8/20/15.
 */
describe('testing pie filter',function(){
   var filter,dessert,manager;
    beforeEach(function(){
        module('pieApp');
        inject(function(_DessertValue_){

            dessert = _DessertValue_;
        })
    });
    it('testing filter',function(){
        inject(function(pieFilter){
            filter = pieFilter;
        });
        expect(filter(dessert.pies[0].flavor)).toBe('CHERRY');
    })
});