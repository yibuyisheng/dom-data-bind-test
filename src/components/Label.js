define(function (require) {
    var binder = require('binder');

    function Label() {
        binder.Component.apply(this, arguments);
    }

    Label.prototype.tpl = ['<label></label>'].join('');

    binder.inherit(Label, binder.Component);

    return binder;
});
