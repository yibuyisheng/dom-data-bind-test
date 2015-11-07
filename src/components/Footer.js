define(function (require) {
    var binder = require('binder');

    function Footer() {
        binder.Component.apply(this, arguments);
    }

    Footer.prototype.tpl = '<div class="footer">footer</div>';

    binder.inherit(Footer, binder.Component);

    return Footer;
});
