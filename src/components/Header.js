define(function (require) {
    var binder = require('binder');

    function Header() {
        binder.Component.apply(this, arguments);
    }

    Header.prototype.initialize = function () {

    };

    Header.prototype.afterMount = function () {

    };

    Header.prototype.tpl = [
        '<h1 class="header">',
            'header',
        '</h1>'
    ].join('');

    binder.inherit(Header, binder.Component);

    return Header;
});
