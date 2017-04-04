/**
 * Created by xujian on 2017/3/21.
 */
(function (window) {
    var Admin = window.Admin;
    var arr = [];
    var push = arr.push;

    Admin.fn.type = "Admin";

    var init = Admin.fn.init = function (selector) {
        //����null undefind
        if (!selector) return this;

        if (typeof selector == "string") {
            if (selector.charAt(0) == "<" && selector.charAt(selector.length - 1) == ">") {
                push.apply(this, Admin.parseHTML(selector));
                return this;
            } else {
                push.apply(this, Admin.select(selector));
                return this;
            }

        }
        //����domԪ��:nodeType //������ǵ���Ԫ�� ������ʹ��push.call(this,selector)
        if (selector.nodeType) {
            //this[0] = selector;
            //this.length = 1;
            push.apply(this,selector);
            return this;
        }

        //����AdminԪ��:
        if (selector.constructor == Admin) {
            //����1.ֱ�ӷ��ش���Ķ���
            //return selector;
            //����2(�Ƽ�)�������Admin�����ÿһ��Ԫ��һһ�ӵ�this�� ����һ���µĶ���
            push.apply(this,selector);
            return this;
        }

        //������:
        if (typeof selector == "function") {
            window.addEventListener( "load",selector );
        }
    };


    init.prototype = Admin.fn;

})(window);
