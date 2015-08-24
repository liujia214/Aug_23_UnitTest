/**
 * Created by allenbklj on 8/20/15.
 */
function User(){

}
User.prototype.sayHello = function(name){
  this.hello = 'Hello ' + name;
};

User.prototype.getScore = function(name){
    this.list = {
      hamid:34,
      amy:55,
      lei:44
    };
    if(this.list[name]){
        return this.list[name]
    }else{
        return 0;
    }
};

module.exports = User;