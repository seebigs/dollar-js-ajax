/*****************/
/*    NATIVES    */
/*****************/

root.Promise = root.Promise || require('promise-polyfill');
var fetch = root.fetch || require('whatwg-fetch');
