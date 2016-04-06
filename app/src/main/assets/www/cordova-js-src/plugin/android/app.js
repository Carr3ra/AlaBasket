var exec = require('cordova/exec');
var APP_PLUGIN_NAME = Number(require('cordova').platformVersion.split('.')[0]) >= 4 ? 'CoreAndroid' : 'App';

module.exports = {

    clearCache:function() {
        exec(null, null, APP_PLUGIN_NAME, "clearCache", []);
    },

    loadUrl:function(url, props) {
        exec(null, null, APP_PLUGIN_NAME, "loadUrl", [url, props]);
    },

    cancelLoadUrl:function() {
        exec(null, null, APP_PLUGIN_NAME, "cancelLoadUrl", []);
    },

    clearHistory:function() {
        exec(null, null, APP_PLUGIN_NAME, "clearHistory", []);
    },

    backHistory:function() {
        exec(null, null, APP_PLUGIN_NAME, "backHistory", []);
    },

    overrideBackbutton:function(override) {
        exec(null, null, APP_PLUGIN_NAME, "overrideBackbutton", [override]);
    },

    overrideButton:function(button, override) {
        exec(null, null, APP_PLUGIN_NAME, "overrideButton", [button, override]);
    },

    exitApp:function() {
        return exec(null, null, APP_PLUGIN_NAME, "exitApp", []);
    }
};
