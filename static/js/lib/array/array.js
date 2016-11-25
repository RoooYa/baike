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

    /*
        数组是否包含指定元素
    */
    Array.prototype.contains = function(suArr) {
        var _this = this;
        for (var i = 0, l = _this.length; i < l; i++) {
            if (_this[i] == suArr) {
                return true;
            }
        }
        return false;
    };
    var array = {
        // 数组去重
        unique: function(arr) {
            var obj = {},
                t = [],
                l = arr.length;
            for (var i = 0; i < l; i++) {
                if (!(obj[arr[i]] === arr[i])) {
                    obj[arr[i]] = arr[i];
                    t.push(arr[i]);
                }
            }
            return t;
        },

        // 合并多个数组并去重
        concat: function() {
            var len = arguments.length, //获取传入数组的个数
                ay = '';
            if (len >= 1) {
                for (var i = 0; i < len; i++) {
                    ay += arguments[i] + ',';
                }
                return array.unique(ay.substring(0, ay.length - 1).split(','));
            } else {
                console.log('亲,至少传入一个数组吧,不然我怎么合并去重！');
            }
        }
    }
    return array;
}));