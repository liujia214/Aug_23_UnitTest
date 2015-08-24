/**
 * Created by allenbklj on 8/20/15.
 */
describe('testing my first method',function(){

    var user = new User();

    //xit ->> disable
   xit('testing user method',function(){
       user.sayHello('Amy');
       expect(user.hello).toBe('Hello Amy');
   });
    it('testing score method',function(){

        var score = user.getScore('amy');
        var score2 = user.getScore('Lei');
        expect(score).toBe(55);
        expect(score2).toBe(0);
    })
});