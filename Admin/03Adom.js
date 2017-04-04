/**
 * Created by xujian on 2017/3/21.
 */
(function (window) {
    //���ں���ģ��������ִ�е� ,���������Admin���캯��,A����ֱ��ʹ��
    //����Ϊ�˴���ִ��Ч��  �����ٴΰ�Admin��A����ȫ��
    var Admin = window.Admin;
    var arr = [];
    push = arr.push;
    Admin.parseHTML = function parseHtml(str) {
        var arr = [];
        var div = document.createElement("div");
        div.innerHTML = str;
        var list = div.childNodes;
        for (var i = 0; i < list.length; i++) {
            arr.push(list[i]);
        }
        return arr;
    }

    //����dom����:
    //.................
    Admin.fn.extend({
        appendTo: function (selector) {
            //���Ȼ��α����
            var iObj = Admin(selector),
                len = iObj.length,
                res = [],
            //����һ���յ�α���� ���ڽ��մ�����dom
                newObj = Admin(),
                temp;
            return this.each(function () {
                for (var i = 0; i < len; i++) {
                    temp = i == len - 1 ? this : this.cloneNode(true);
                    iObj[i].appendChild(temp);
                    res.push(temp);
                }
            });
            res.push.apply(newObj, res);
            newObj.prev = this;
            return newObj;
        },

        unique: function (iObj) {
            var arr = [],
                newIobj = Admin();
            for (var i = 0; i < iObj.length; i++) {
                if (arr.indexOf(i) == -1) {//Ϊ-1ʱ˵��û���ҵ�
                    arr.push(iObj[i]);
                }
            }
            push.apply(newIobj, arr);
            return newIobj;
        },
        parent: function () {
            var iObj = Admin();
            var temp = this.map(function (v) {
                return v.parentNode();
            })
            //ȥ��
            iObj = Admin.unique(iObj);

            push.apply(iObj, temp);
            return this.pushStack(iObj);
        },
        on: function (eventName, callback) {
            return this.each(function () {
                this.addEventListener(eventName, callback);
            });
        },
        off: function (eventName, callback) {
            return this.each(function () {
                this.removeEventListener(eventName, callback.name);
            });
        }
    })
})(window);
