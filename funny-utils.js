/**
 * Format Date 
 * usage:
 *  date2str(new Date(data.qpoints[i].qtime*1000),"MM-dd hh:mm");
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
  return url_str.match(/(\w+\.(?:com|cn|net|org|cc|so|be|me|io|edu|gov|info|tv|museum|coop|aero|
    int|biz|name|pro|aero|travel|jobs|mobi|jp|hk))(?:\/|$)/)[1];
}