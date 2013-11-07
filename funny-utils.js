/**
 * Format Date 
 * usage:
 *  date2str(new Date(data.qpoints[i].qtime*1000),"yyyy-MM-dd hh:mm");
 */
date2str = function(x,y) {  
  var z = {M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()};
  y = y.replace(/(M+|d+|h+|m+|s+)/g,function(v) {
    return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-2)
  });
  return y.replace(/(y+)/g,function(v) {return x.getFullYear().toString().slice(-v.length)});
}

/**
 * Get domain name from url
 * eg: 'http://123.blog.163.com/123/123.html'
 */
getDomainName = function(url_str) {
  return url_str.match(/(\w+\.(?:com|cn|net|org|cc|so|be|me|io|edu|gov|info|tv|museum|coop|aero|int|biz|name|pro|aero|travel|jobs|mobi|jp|hk))(?:\/|$)/)[1];
}

/**
 * Get a random index in an array.
 * @param {Int} arrayLength. The length of an array.
 * @param {Array} exceptPosArray. An array contains numbers 
 *                you want to except in the array.
 * @return {Int} return the random index of the array as you need.
 */
getRandomPos = function(arrayLenth, exceptPosArray) {
  var pos, array = [];
  exceptPosArray ? exceptPosArray = exceptPosArray : exceptPosArray = [];

  for(var i = 0; i < arrayLenth; i++) {
    array.push(i);
  }

  pos = Math.round(Math.random() * arrayLenth);
  if(goog.array.contains(exceptPosArray, pos)) {
    this.getRandomPos(arrayLenth, exceptPosArray);
  }
  else {
    return pos;
  }
}

/**
 * 分时函数，items是数据，process是要执行的函数，context是传递过来的上下文，callback是回调函数.
 * 该函数可以用来处理分时加载数据
 * 其中的50ms 是大多数js代码执行所需要花费的时间，如果执行的时间要小于50ms，则可以再执行一次
 */
function timedChunk(items, process, context, callback) {
    var todo = items.concat(), delay = 25; 
    setTimeout(function() { 
        var start = +new Date();
        do { 
            process.call(context, todo.shift());
        } while (todo.length > 0 && (+new Date() - start < 50))
        if(todo.length > 0) { 
            setTimeout(arguments.callee, 25); 
        } else if(callback) { 
            callback(); 
        } 
    }, delay); 
} 