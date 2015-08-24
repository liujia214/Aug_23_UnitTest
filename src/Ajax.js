/**
 * Created by allenbklj on 8/21/15.
 */
var obj = {
    ajax:function(url,verb,callback){
        var xhr = new XMLHttpRequest();
        xhr.open(verb,url);
        xhr.addEventListener('readystatechange',function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    callback(xhr.responseText);
                }
            }
        });
        xhr.send();
    }
};

module.exports = obj;