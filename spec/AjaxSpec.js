/**
 * Created by allenbklj on 8/21/15.
 */
describe('tesing ajax',function(){
    var callback,result;

    beforeEach(function(){

        callback = jasmine.createSpy('callback');
        spyOn(obj,'ajax').and.callFake(callback);

        obj.ajax('https://api.github.com/search/repositories?q=angular','get',function(result){console.log(result);});
    });
    it('test',function(){

        expect(callback).toHaveBeenCalled();
        expect(obj.ajax).toHaveBeenCalledWith(jasmine.any(String),jasmine.any(String),jasmine.any(Function));
        expect(obj.ajax.calls.argsFor(0)).toEqual(['https://api.github.com/search/repositories?q=angular','get',
            function(result){console.log(result);}]);
    });

    xit("should make a real AJAX request", function (done) {
        //var callback = jasmine.createSpy();
        getProduct(function(data){result = data});

        setTimeout(function(){
            console.log(result);
            expect(typeof result).toEqual('string');
        },10000);
        done();
    });

    function getProduct(callback) {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/search/repositories?q=angular",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: callback
        });
    }

});