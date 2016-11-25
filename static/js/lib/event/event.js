(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        //define(['jquery'], factory);
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(this, function() {
    // 自定义事件监听
    var Event = {
        _listeners: {},
        // 添加事件
        on: function(type, fn) {
            if (typeof this._listeners[type] === "undefined") {
                this._listeners[type] = [];
            }
            if (typeof fn === "function") {
                this._listeners[type].push(fn);
            }
            return this;
        },
        // 触发事件
        emit: function(type) {
            var arrayEvent = this._listeners[type];
            if (arrayEvent instanceof Array) {
                for (var i = 0, length = arrayEvent.length; i < length; i += 1) {
                    if (typeof arrayEvent[i] === "function") {
                        arrayEvent[i]({
                            type: type
                        });
                    }
                }
            }
            return this;
        },
        //删除事件
        removeEvent: function(type, fn) {
            var arrayEvent = this._listeners[type];
            if (typeof type === "string" && arrayEvent instanceof Array) {
                if (typeof fn === "function") {
                    for (var i = 0, length = arrayEvent.length; i < length; i += 1) {
                        if (arrayEvent[i] === fn) {
                            this._listeners[type].splice(i, 1);
                            break;
                        }
                    }
                } else {
                    delete this._listeners[type];
                }
            }
            return this;
        }
    };
    return Event;
}));