/**
 * Created by allenbklj on 8/20/15.
 */
describe('dessert manager',function(){
   var myValue,serManager, mockWindow,pieSvc;

    beforeEach(function(){
        module('pieApp');
        inject(function(DessertManager,DessertValue,$window,DessertSvc){
            myValue = DessertValue;
            serManager = DessertManager;
            mockWindow = $window;
            pieSvc = DessertSvc;
        });

    });

    it('testing for initialization',function(){
        expect(myValue.pies).toEqual([
            {flavor:'cherry',score:20},
            {flavor:'apple',score:43},
            {flavor:'grape',score:12}
        ]);
    });

    it('testing for pieFlavor',function(){

        expect(serManager.pieFlavor()).toEqual(
            ['cherry', 'apple', 'grape']
        );
    });

    it('testing for pieFlavorSort',function(){
        serManager.pieFlavorSort();
        expect(myValue.pies).toEqual(
            [
                {flavor:'grape',score:12},
                {flavor:'cherry',score:20},
                {flavor:'apple',score:43}
            ]
        );
        expect(myValue.pies[1].flavor).toBe('cherry');
    });

    describe('testing service',function(){

        it('should show alert when title is not passed into showDialog',function(){
            var message = 'Some message';
            spyOn(mockWindow,'alert');
            pieSvc.showDialog(message);
            expect(mockWindow.alert).toHaveBeenCalledWith(message);
        });

    })
});