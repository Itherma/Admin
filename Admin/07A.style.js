/**
 * Created by xujian on 2017/3/23.
 */
(function (window) {
    var Admin = window.Admin;

    Admin.fn.extend({
        css: function (name, value) {
            if (value === undefined) {
                //һ�����������
                if (typeof name === "string") {
                    //��ȡ��Ӧ��ʽ
//             return this[0].style[name]; ����ֻ�ܷ���������ʽ ����ȡ
                    return this[0].style[name] || window.getComputedStyle(this[0])[name];
                } else {
                    //���ö����ʽ
                    return this.each(function () {
                        var that = this;
                        Admin.each(name, function (k, v) {
                            that.style[k] = v;
                        })
                    })
                }
            } else {
                //����һ����ʽ
                return this.each(function () {
                    this.style[name] = value;
                })
            }
        },
        removeClass: function (name) {
            //��this�е�class��name������ȥ��
            return this.each(function () {
                var names = this.className && this.className.split(" ") || [];
                //������filter �� map ��������
                var newN = names.filter(function (v) {
                    return v != name;
                });
                this.className = newN.join(" ");
            });
        },
        hasClass: function (name) {
            //�жϵ�0��Ԫ���Ƿ���name
            var dom = this[0];
            var names = dom.className && dom.className.split(" ") || [];
            for (var i = 0; i < names.length; i++) {
                if (names[i] == name) {
                    return true;
                }
            }
            return false;
        },
        attr: function (name, value) {
            if (value === undefined) {
                //��ȡ����
                return this[0].getAttribute(name);
            } else {
                return this.each(function () {
                    //��ΪҪ��ÿһ��domԪ������ ����Ҫ����
                    this.setAttribute(name, value);
                });
            }
        },
        prop: function (name, value) {   //ר�����ڴ������Ե����� disable:FALSE
            if (value === undefined) {
                //��ȡ����
                return this[0][name];
            } else {
                return this.each(function () {
                    //��ΪҪ��ÿһ��domԪ������ ����Ҫ����
                    this[name] = value;
                });
            }
        }
    });
    Admin.each({
        html: "innerHTML",
        text: "innerText",
        val: "value"
    }, function (k, v) {
        Admin.fn[k] = function (value) {
            if (value === undefined) {
                return this[0][v];
            } else {
                return this.each(function () {
                    this[v] = value;
                });
            }
        };
    });
})(window);
