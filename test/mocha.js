/**
 * Created by allenbklj on 8/23/15.
 */
var assert = require('assert');
var User = require('../src/User');
var ajax = require('../src/Ajax');
var should = require('should');

describe('Array',function(){
   describe('#indexOf()',function(){
       it('should return -1 when the value is not in array',function(){
           assert.equal(-1,[1,2,3].indexOf(4));
           [1,2,3].indexOf(5).should.equal(-1);
       })
   });
   describe('#save()',function(){
       it('should save without error',function(){
           var user = new User();
           user.sayHello('Amy');
       })
   });

   describe.skip('ajax',function(){
       it('should return json ',function(done){
           ajax.ajax('https://api.github.com/search/repositories?q=angular','get',done);
       })
   })
});