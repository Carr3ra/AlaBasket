module.exports = {
    exec: function(bridgeSecret, service, action, callbackId, argsJson) {
        return prompt(argsJson, 'gap:'+JSON.stringify([bridgeSecret, service, action, callbackId]));
    },
    setNativeToJsBridgeMode: function(bridgeSecret, value) {
        prompt(value, 'gap_bridge_mode:' + bridgeSecret);
    },
    retrieveJsMessages: function(bridgeSecret, fromOnlineEvent) {
        return prompt(+fromOnlineEvent, 'gap_poll:' + bridgeSecret);
    }
};
