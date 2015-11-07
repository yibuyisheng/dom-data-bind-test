define(function (require) {
    var binder = require('binder');

    function Footer() {
        binder.Component.apply(this, arguments);
    }

    Footer.prototype.tpl = '<div>footer</div>';

    Footer.getStyle = function () {
        return '#root# {height: 50px; line-height: 50px;}';
    };

    binder.inherit(Footer, binder.Component);

    return Footer;
});

