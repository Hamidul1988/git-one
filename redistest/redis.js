const redis=require('redis');
const blubird =require('bluebird');
const clint=redis.createClient();
blubird.promisifyAll(clint);
module.exports=clint;