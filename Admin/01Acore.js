/**
 * Created by xujian on 2017/3/21.
 */
(function (window) {
    var arr = [];
    var slice = arr.slice;

    function Admin(selector) {
        return new Admin.fn.init(selector);
    }

    Admin.fn = Admin.prototype = {
        constructor: Admin,
        length: 0,
        each: function (callback) {
            return Admin.each(this, callback);
        },
        map: function (callback) {
            return Admin.map(this, callback);
        },
        toArray: function () {
            return slice.call(this);
        },
        get: function (index) {
            if (index === undefined) {
                return this.toArray();
            } else {
                if (index >= 0) {
                    return this[index];
                } else if (index < 0) {
                    return this[this.length + index];
                }
            }
            return this;
        },
        end:function(){
            return this.prev||this;
        },
        pushStack:function(newObj){
            newObj.prev=this;
            return newObj;
        }

    };



    Admin.isArrayLike = function (arr) {
        var length = arr && arr.length;
        return typeof length === "number" && length >= 0;
    }

    Admin.each = function (arr, callback) {
        var i, k;
        if (Admin.isArrayLike(arr)) {
            for (i = 0; i < arr.length; i++) {
                if (callback.call(arr[i], i, arr[i]) === false) {
                    break
                }
            }
        } else {
            for (k in arr) {
                if (callback.call(arr[k], k, arr[k]) === false) {
                    break
                }
            }
        }
        return arr;
    };


    Admin.map = function (arr, callback) {
        var i, k, temp, res = [];
        if (Admin.isArrayLike(arr)) {
            for (i = 0; i < arr.length; i++) {
                temp = callback(arr[i], i);//��Ϊ��Ҫ���������ÿһ����д���  �����ǽ�arr��ÿһ��ֵ������ص�������
                if (temp !== undefined) {
                    res.push(temp);
                }
            }
        } else {
            for (k in arr) {
                temp = callback(arr[k], k);
                if (temp !== undefined) {
                    res.push(temp);
                }
            }
        }

        return res;
    }

    Admin.fn.extend = Admin.extend = function (obj) {
        for (var k in obj) {
            this[k] = obj[k];
        }
    };


    Admin.select = function (selector) {
        return document.querySelectorAll(selector);
    }

    window.Admin = window.A = Admin;

})(window);
//�����밴���ֿܷ� ֻҪ�ѹ���������¶��ȫ��������Ϳ�����