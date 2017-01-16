

module.exports = function (toParse) {


  var parser = require('ua-parser-js');
  var ua = parser(toParse.headers['user-agent']);
  var userAgentObject = ua.os;
  var userAgent = userAgentObject["name"] + " " + userAgentObject["version"];



  var langFullString = toParse.headers["accept-language"];
  var langShortArr = langFullString.split(',');
  var langShort = langShortArr[0];


  var ip = toParse.headers['x-forwarded-for'] ||
    toParse.connection.remoteAddress ||
    toParse.socket.remoteAddress ||
    toParse.connection.socket.remoteAddress;


  var outp = {
    "ipaddress": ip,
    "language": langShort,
    "software": userAgent
  };

  return outp;
};