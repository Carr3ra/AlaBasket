cordova.define("cordova-plugin-whitelist.whitelist", function(require, exports, module) {

if (!document.querySelector('meta[http-equiv=Content-Security-Policy]')) {
    var msg = 'No Content-Security-Policy meta tag found. Please add one when using the cordova-plugin-whitelist plugin.';
    console.error(msg);
    setInterval(function() {
        console.warn(msg);
    }, 10000);
}

});
