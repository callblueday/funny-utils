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