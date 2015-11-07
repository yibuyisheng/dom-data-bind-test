define(function (require) {
    var binder = require('binder');

    function Header() {
        binder.Component.apply(this, arguments);
    }

    Header.prototype.initialize = function () {

    };

    Header.prototype.literalAttrReady = function () {
        var me = this;

        setInterval(function () {
            me.setData({
                contentText: new Date().getTime()
            });
        }, 1000);
    };

    Header.prototype.getStyle = function () {
        return [
            '#root# {',
                'height: 50px;',
                'line-height: 50px;',
                'text-align: center;',
                'font-weight: bold;',
                'font-size: 18px;',
                'margin: 0;',
                'background: #9eab7f;',
            '}'
        ].join('');
    };

    Header.prototype.tpl = [
        '<h1 title="${title}">',
            '${contentText}',
        '</h1>'
    ].join('');

    binder.inherit(Header, binder.Component);

    return Header;
});
